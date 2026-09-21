export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>Emilio Ciorraga Albalat</p>
        <div className="footer__links">
          <a href="mailto:emiliociorraga@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>emiliociorraga@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/emilio-ciorraga-albalat/">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.53-1.54-2.53-1.54 0-1.78 1.21-1.78 2.45v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.56 1.96 3.56 4.5v5.27Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
