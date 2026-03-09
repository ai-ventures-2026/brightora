import { useState } from 'react'

const contactInfo = [
  {
    icon: '◆',
    label: 'Email Us',
    value: 'hello@brightora.co',
    sub: 'We reply within 24 hours',
    color: '#ff6b35',
  },
  {
    icon: '▲',
    label: 'Call Us',
    value: '+1 (888) 274-6672',
    sub: 'Mon–Fri, 9am–6pm EST',
    color: '#ffd166',
  },
  {
    icon: '●',
    label: 'Visit Us',
    value: '240 Kent Ave, Brooklyn, NY',
    sub: 'Also in London & Toronto',
    color: '#118ab2',
  },
]

const services = [
  'Brand Design & Identity',
  'UI/UX Design',
  'Digital Marketing',
  'Content Creation',
  'Online Course Production',
  'Web Development',
  'Something Else',
]

const budgets = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $40,000',
  '$40,000 – $100,000',
  '$100,000+',
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope, but most brand design projects take 6–10 weeks, web development 8–14 weeks, and digital marketing campaigns can kick off within 2 weeks. We always give you a detailed timeline in our proposal.',
  },
  {
    q: 'Do you work with clients outside the US?',
    a: 'Absolutely — about 40% of our clients are based outside North America. We work asynchronously across time zones and have team members in the US, UK, and Canada.',
  },
  {
    q: 'Can you handle both the creative and technical work?',
    a: 'Yes, that\'s our superpower. We are a fully integrated team of designers, developers, marketers, and educators — no outsourcing, no handoff friction.',
  },
  {
    q: 'What does your payment structure look like?',
    a: 'We typically take a 40% deposit to begin, 40% at the project midpoint, and 20% upon delivery. Retainer services are billed monthly. We also offer milestone-based structures for larger projects.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Let's Start a<br />Conversation</h1>
          <p>Tell us what you're working on. We'll tell you how we can help — and give you a clear path forward.</p>
        </div>
      </section>

      {/* ===== MAIN CONTACT AREA ===== */}
      <section className="section contact-section">
        <div className="container contact-grid">

          {/* Contact info sidebar */}
          <div className="contact-sidebar">
            <div className="contact-info">
              <h3 className="contact-info__heading">Reach Out Directly</h3>
              <p className="contact-info__sub">
                Prefer a direct line? Here's where to find us.
              </p>

              {contactInfo.map(({ icon, label, value, sub, color }) => (
                <div key={label} className="contact-info-item">
                  <div className="contact-info-item__icon" style={{ background: `${color}18`, color }}>
                    {icon}
                  </div>
                  <div>
                    <div className="contact-info-item__label">{label}</div>
                    <div className="contact-info-item__value">{value}</div>
                    <div className="contact-info-item__sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office map placeholder */}
            <div className="contact-map">
              <div className="contact-map__inner">
                <div className="contact-map__pin" />
                <div className="contact-map__label">Brooklyn, NY</div>
                <div className="contact-map__grid" />
              </div>
            </div>

            {/* Social */}
            <div className="contact-social">
              <p className="contact-social__label">Find us on</p>
              <div className="contact-social__links">
                {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((s) => (
                  <a key={s} href="#" className="contact-social__link">{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">◆</div>
                <h2>Message Received!</h2>
                <p>
                  Thanks for reaching out, <strong>{form.name || 'friend'}</strong>. Someone from our team will be in touch within one business day.
                </p>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__header">
                  <h2>Tell Us About Your Project</h2>
                  <p>Fill in the details below and we'll put together a thoughtful response.</p>
                </div>

                {/* Name + Email */}
                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company / Organisation</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Your company name (optional)"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Service + Budget */}
                <div className="contact-form__row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      className="form-select"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, timeline, and any specific challenges you're facing…"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg contact-form__submit">
                  Send Message →
                </button>
                <p className="contact-form__note">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section section-alt faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <span className="faq-item__icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__answer">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Contact grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 64px;
          align-items: start;
        }

        /* Sidebar */
        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .contact-info {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 32px;
        }

        .contact-info__heading {
          font-size: 1.2rem;
          font-weight: 800;
          color: #2d2d2d;
          margin-bottom: 8px;
        }

        .contact-info__sub {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 28px;
        }

        .contact-info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
        }

        .contact-info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .contact-info-item__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .contact-info-item__label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 4px;
        }

        .contact-info-item__value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2d2d2d;
          margin-bottom: 3px;
        }

        .contact-info-item__sub {
          font-size: 0.8rem;
          color: #aaa;
        }

        /* Map placeholder */
        .contact-map {
          border-radius: 20px;
          overflow: hidden;
          height: 180px;
          background: #e9ecef;
          position: relative;
        }

        .contact-map__inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
        }

        .contact-map__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .contact-map__pin {
          width: 20px;
          height: 20px;
          border-radius: 50% 50% 50% 0;
          background: #ff6b35;
          transform: rotate(-45deg);
          box-shadow: 0 2px 8px rgba(255,107,53,0.4);
          position: relative;
          z-index: 1;
        }

        .contact-map__label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #2d2d2d;
          background: white;
          padding: 4px 10px;
          border-radius: 6px;
          position: relative;
          z-index: 1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        /* Social */
        .contact-social {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .contact-social__label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #888;
          white-space: nowrap;
        }

        .contact-social__links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .contact-social__link {
          font-size: 0.8rem;
          font-weight: 700;
          color: #555;
          background: white;
          padding: 6px 12px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid #eee;
          transition: all 0.2s;
        }

        .contact-social__link:hover {
          border-color: #ff6b35;
          color: #ff6b35;
        }

        /* Form */
        .contact-form-wrapper {
          background: white;
          border-radius: 24px;
          border: 1px solid #eee;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06);
          overflow: hidden;
        }

        .contact-form {
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form__header {
          margin-bottom: 8px;
        }

        .contact-form__header h2 {
          margin-bottom: 8px;
        }

        .contact-form__header p {
          font-size: 0.95rem;
          color: #888;
        }

        .contact-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-form__submit {
          width: 100%;
          justify-content: center;
          margin-top: 8px;
        }

        .contact-form__note {
          font-size: 0.8rem;
          color: #aaa;
          text-align: center;
        }

        /* Success state */
        .contact-success {
          padding: 64px 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .contact-success__icon {
          width: 80px;
          height: 80px;
          border-radius: 22px;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          box-shadow: 0 8px 32px rgba(255,107,53,0.35);
        }

        .contact-success h2 {
          color: #2d2d2d;
        }

        .contact-success p {
          max-width: 400px;
          color: #666;
        }

        /* FAQ */
        .faq-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: white;
          border-radius: 14px;
          border: 1.5px solid #eee;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-item--open {
          border-color: #ff6b35;
        }

        .faq-item__question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 700;
          color: #2d2d2d;
          text-align: left;
          font-family: inherit;
          transition: background 0.2s;
        }

        .faq-item__question:hover {
          background: rgba(255,107,53,0.04);
        }

        .faq-item__icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,107,53,0.1);
          color: #ff6b35;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .faq-item__answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 24px;
        }

        .faq-item--open .faq-item__answer {
          max-height: 200px;
          padding: 0 24px 22px;
        }

        .faq-item__answer p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.75;
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-sidebar {
            order: 2;
          }

          .contact-form-wrapper {
            order: 1;
          }
        }

        @media (max-width: 600px) {
          .contact-form {
            padding: 28px 24px;
          }

          .contact-form__row {
            grid-template-columns: 1fr;
          }

          .contact-success {
            padding: 40px 24px;
          }
        }
      `}</style>
    </div>
  )
}
