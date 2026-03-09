import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ],
  Services: [
    { to: '/services', label: 'Brand Design' },
    { to: '/services', label: 'UI/UX Design' },
    { to: '/services', label: 'Digital Marketing' },
    { to: '/services', label: 'Online Courses' },
    { to: '/services', label: 'Web Development' },
  ],
  Connect: [
    { to: '#', label: 'Twitter / X' },
    { to: '#', label: 'Instagram' },
    { to: '#', label: 'LinkedIn' },
    { to: '#', label: 'Dribbble' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-icon">B</span>
                <span className="footer__logo-text">
                  Bright<span className="footer__logo-accent">ora</span>
                </span>
              </Link>
              <p className="footer__tagline">
                We ignite creative potential through bold design, strategic marketing, and world-class digital education.
              </p>
              <div className="footer__social">
                {['TW', 'IG', 'LI', 'DR'].map((s) => (
                  <a key={s} href="#" className="footer__social-btn" aria-label={s}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="footer__col">
                <h4 className="footer__col-heading">{heading}</h4>
                <ul className="footer__col-list">
                  {links.map(({ to, label }) => (
                    <li key={label}>
                      <Link to={to} className="footer__col-link">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Brightora. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #1a1a1a;
          color: #adb5bd;
        }

        .footer__top {
          padding: 72px 0 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
        }

        /* Brand */
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .footer__logo-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 1.1rem;
        }

        .footer__logo-text {
          font-size: 1.25rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .footer__logo-accent {
          color: #ff6b35;
        }

        .footer__tagline {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #888;
          margin-bottom: 28px;
        }

        .footer__social {
          display: flex;
          gap: 10px;
        }

        .footer__social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
          color: #adb5bd;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.2s;
        }

        .footer__social-btn:hover {
          background: #ff6b35;
          color: white;
          transform: translateY(-2px);
        }

        /* Columns */
        .footer__col-heading {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .footer__col-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer__col-link {
          font-size: 0.95rem;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer__col-link:hover {
          color: #ff6b35;
        }

        /* Bottom bar */
        .footer__bottom {
          padding: 20px 0;
        }

        .footer__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer__copy {
          font-size: 0.88rem;
          color: #666;
        }

        .footer__bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer__bottom-link {
          font-size: 0.88rem;
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer__bottom-link:hover {
          color: #ff6b35;
        }

        @media (max-width: 1024px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }

          .footer__brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .footer__grid {
            grid-template-columns: 1fr;
          }

          .footer__brand {
            grid-column: span 1;
          }

          .footer__bottom-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer__bottom-links {
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
