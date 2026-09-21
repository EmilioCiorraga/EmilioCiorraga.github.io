import { useRef, useState, type FormEvent } from 'react'

const endpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '').trim()
const isConfigured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)

export default function Contact() {
  const [submission, setSubmission] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const sending = useRef(false)

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isConfigured || sending.current) return
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    sending.current = true
    setSubmission('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(20000),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setSubmission('success')
    } catch {
      setSubmission('error')
    } finally {
      sending.current = false
    }
  }

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <h2 id="contact-title">Contacto</h2>
      <div className="contact__layout">
        <div className="contact__presentation">
          <h3>¿Qué construimos?</h3>
          <p className="contact__intro">
            Me interesa crear nuevos proyectos y sumarme a otros que ya estén en marcha.
            Cuéntame qué tienes en mente y cómo podría contribuir.
          </p>
        </div>

        <form className="contact__form" onSubmit={submitMessage} aria-label="Cuéntame tu proyecto" aria-busy={submission === 'sending'}>
          <fieldset disabled={submission === 'sending'}>
            <div className="contact__field">
              <label htmlFor="contact-name">Nombre</label>
              <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Cuéntame tu proyecto</label>
              <textarea id="contact-message" name="message" rows={5} required maxLength={5000} />
            </div>
            <button className="contact__submit" type="submit" disabled={!isConfigured}>
              {submission === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </fieldset>
          <p className="contact__form-status" role="status">
            {!isConfigured && 'El formulario no está disponible temporalmente. Inténtalo más tarde.'}
            {submission === 'sending' && 'Enviando tu mensaje…'}
            {submission === 'success' && 'Mensaje enviado. Gracias por contarme tu proyecto.'}
            {submission === 'error' && 'No se ha podido confirmar el envío. Tu texto sigue aquí: puedes intentarlo de nuevo.'}
          </p>
        </form>
      </div>
    </section>
  )
}
