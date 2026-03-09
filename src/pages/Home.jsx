import { Link } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    icon: '◆',
    title: 'Brand Design',
    desc: 'Craft identities that resonate. We build brands with soul — logos, systems, and visual languages that stand out and endure.',
    color: '#ff6b35',
    bg: 'rgba(255,107,53,0.08)',
  },
  {
    icon: '▲',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that convert. From social media strategy to paid ads, we grow your audience and bottom line.',
    color: '#ffd166',
    bg: 'rgba(255,209,102,0.15)',
  },
  {
    icon: '●',
    title: 'Online Courses',
    desc: 'World-class learning experiences. We design and produce online courses that educate, inspire, and transform careers.',
    color: '#06d6a0',
    bg: 'rgba(6,214,160,0.1)',
  },
  {
    icon: '■',
    title: 'Web Development',
    desc: 'High-performance digital products. Clean code, stunning design, blazing speed — websites and apps built to convert.',
    color: '#118ab2',
    bg: 'rgba(17,138,178,0.1)',
  },
]

const projects = [
  {
    title: 'Luminate Brand Relaunch',
    category: 'Brand Design',
    desc: 'Complete visual identity overhaul for a fintech startup, resulting in 340% increase in brand recognition.',
    gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffd166 100%)',
    tag: 'Brand Design',
  },
  {
    title: 'EduSphere Learning Platform',
    category: 'Web Development',
    desc: 'Full-stack learning management system serving 50,000+ students across 12 countries.',
    gradient: 'linear-gradient(135deg, #2d2d2d 0%, #444 100%)',
    tag: 'Web Dev',
  },
  {
    title: 'Orbit Campaign Suite',
    category: 'Digital Marketing',
    desc: 'Multi-channel digital campaign that drove 5x ROI for a D2C wellness brand in just 90 days.',
    gradient: 'linear-gradient(135deg, #118ab2 0%, #06d6a0 100%)',
    tag: 'Marketing',
  },
]

const testimonials = [
  {
    quote: "Brightora didn't just redesign our brand — they completely transformed how the market perceives us. The results were beyond what we imagined.",
    name: 'Sarah Chen',
    role: 'CEO, Luminate Finance',
    initials: 'SC',
    color: '#ff6b35',
  },
  {
    quote: "The online course they produced for us became our #1 revenue driver within three months. Their instructional design expertise is unmatched.",
    name: 'Marcus Williams',
    role: 'Founder, GrowthLab',
    initials: 'MW',
    color: '#ffd166',
  },
  {
    quote: "Our website traffic tripled after working with Brightora. Their team understood our vision immediately and executed it flawlessly.",
    name: 'Priya Sharma',
    role: 'Head of Marketing, Orbit Health',
    initials: 'PS',
    color: '#118ab2',
  },
]

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50K+', label: 'Students Taught' },
  { value: '12', label: 'Industry Awards' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <span className="section-label">Creative Agency &amp; Digital Education</span>
            <h1 className="hero__headline">
              Ignite Your<br />
              <span className="hero__headline-accent">Creative</span>{' '}
              Potential
            </h1>
            <p className="hero__sub">
              We partner with bold brands and ambitious creators to deliver transformative design, marketing, and education. Your vision. Our craft. Extraordinary results.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn-primary btn-lg">
                Explore Services
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero__visual">
            <div className="hero__card hero__card--main">
              <div className="hero__card-icon" style={{ background: 'linear-gradient(135deg, #ff6b35, #ffd166)' }}>◆</div>
              <div>
                <div className="hero__card-title">Brand Identity</div>
                <div className="hero__card-sub">Crafted with precision</div>
              </div>
            </div>
            <div className="hero__card hero__card--secondary">
              <div className="hero__card-icon" style={{ background: 'linear-gradient(135deg, #118ab2, #06d6a0)' }}>▲</div>
              <div>
                <div className="hero__card-title">5x ROI</div>
                <div className="hero__card-sub">Average campaign return</div>
              </div>
            </div>
            <div className="hero__card hero__card--tertiary">
              <div className="hero__card-icon" style={{ background: 'linear-gradient(135deg, #2d2d2d, #555)' }}>●</div>
              <div>
                <div className="hero__card-title">50K+ Students</div>
                <div className="hero__card-sub">Learning worldwide</div>
              </div>
            </div>
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          <div className="container hero__stats-inner">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section-alt services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Services Built for<br />Bold Ambitions</h2>
            <p>From brand conception to digital execution — we offer end-to-end creative and educational services that move the needle.</p>
          </div>

          <div className="grid-4">
            {services.map(({ icon, title, desc, color, bg }) => (
              <div key={title} className="service-card card">
                <div className="service-card__icon" style={{ background: bg, color }}>
                  {icon}
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link" style={{ color }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn btn-dark btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Work</span>
            <h2>Projects That Prove<br />the Point</h2>
            <p>A selection of our most impactful work — where strategy meets execution and results speak louder than words.</p>
          </div>

          <div className="grid-3">
            {projects.map(({ title, desc, gradient, tag }) => (
              <div key={title} className="project-card card">
                <div className="project-card__visual" style={{ background: gradient }}>
                  <span className="badge badge-dark project-card__badge">{tag}</span>
                  <div className="project-card__decoration" />
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{title}</h3>
                  <p className="project-card__desc">{desc}</p>
                  <a href="#" className="project-card__link">View Case Study →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-alt testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Love</span>
            <h2>What Our Clients Say</h2>
            <p>We let our results do the talking — but here's what our clients have to say about working with Brightora.</p>
          </div>

          <div className="grid-3">
            {testimonials.map(({ quote, name, role, initials, color }) => (
              <div key={name} className="testimonial-card card">
                <div className="testimonial-card__quote-mark" style={{ color }}>&#8220;</div>
                <p className="testimonial-card__text">{quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" style={{ background: color }}>
                    {initials}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{name}</div>
                    <div className="testimonial-card__role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter__deco newsletter__deco--1" />
            <div className="newsletter__deco newsletter__deco--2" />
            <div className="newsletter__content">
              <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                Stay Inspired
              </span>
              <h2 className="newsletter__heading">
                Get Creative Insights<br />Delivered Weekly
              </h2>
              <p className="newsletter__sub">
                Join 12,000+ creatives and marketers who get our curated insights on design, branding, and digital education every Tuesday.
              </p>

              {subscribed ? (
                <div className="newsletter__success">
                  You're in! Welcome to the Brightora community.
                </div>
              ) : (
                <form className="newsletter__form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className="newsletter__input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-white btn-lg">
                    Subscribe Free
                  </button>
                </form>
              )}
              <p className="newsletter__note">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* HERO */
        .hero {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          padding-top: 72px;
          position: relative;
          overflow: hidden;
        }

        .hero__bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero__shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }

        .hero__shape--1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(255,107,53,0.25) 0%, transparent 70%);
        }

        .hero__shape--2 {
          width: 400px;
          height: 400px;
          bottom: 0;
          left: -100px;
          background: radial-gradient(circle, rgba(255,209,102,0.15) 0%, transparent 70%);
        }

        .hero__shape--3 {
          width: 300px;
          height: 300px;
          top: 40%;
          left: 40%;
          background: radial-gradient(circle, rgba(17,138,178,0.15) 0%, transparent 70%);
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 80px;
          position: relative;
          z-index: 1;
        }

        .hero__content .section-label {
          background: rgba(255,107,53,0.15);
          color: #ffd166;
          border: 1px solid rgba(255,209,102,0.2);
        }

        .hero__headline {
          font-size: clamp(2.6rem, 5.5vw, 4.5rem);
          color: #ffffff;
          margin: 20px 0 24px;
          line-height: 1.1;
        }

        .hero__headline-accent {
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__sub {
          color: #adb5bd;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 500px;
        }

        .hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero__actions .btn-secondary {
          border-color: rgba(255,255,255,0.3);
          color: #ffffff;
        }

        .hero__actions .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
          color: #ffffff;
        }

        /* Hero Visual */
        .hero__visual {
          position: relative;
          height: 420px;
        }

        .hero__card {
          position: absolute;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: white;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          animation: floatCard 6s ease-in-out infinite;
        }

        .hero__card--main {
          top: 40px;
          left: 0;
          right: 80px;
          animation-delay: 0s;
        }

        .hero__card--secondary {
          top: 170px;
          right: 0;
          left: 80px;
          animation-delay: -2s;
        }

        .hero__card--tertiary {
          top: 300px;
          left: 0;
          right: 120px;
          animation-delay: -4s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero__card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          color: white;
        }

        .hero__card-title {
          font-weight: 700;
          font-size: 1rem;
          color: white;
        }

        .hero__card-sub {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          margin-top: 2px;
        }

        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
        }

        .hero__orb--1 {
          width: 200px;
          height: 200px;
          top: 0;
          right: 0;
          background: rgba(255,107,53,0.3);
        }

        .hero__orb--2 {
          width: 150px;
          height: 150px;
          bottom: 60px;
          right: 60px;
          background: rgba(255,209,102,0.2);
        }

        /* Stats */
        .hero__stats {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 32px 0;
          position: relative;
          z-index: 1;
        }

        .hero__stats-inner {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 24px;
        }

        .hero__stat {
          text-align: center;
        }

        .hero__stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .hero__stat-label {
          display: block;
          font-size: 0.85rem;
          color: #888;
          margin-top: 4px;
          letter-spacing: 0.05em;
        }

        /* Services */
        .service-card {
          padding: 32px;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .service-card__icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 20px;
        }

        .service-card__title {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #2d2d2d;
        }

        .service-card__desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 20px;
        }

        .service-card__link {
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .service-card__link:hover {
          opacity: 0.75;
        }

        .services-cta {
          text-align: center;
          margin-top: 48px;
        }

        /* Projects */
        .project-card__visual {
          height: 200px;
          position: relative;
          display: flex;
          align-items: flex-start;
          padding: 16px;
          overflow: hidden;
        }

        .project-card__decoration {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .project-card__badge {
          position: relative;
          z-index: 1;
        }

        .project-card__body {
          padding: 24px;
        }

        .project-card__title {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: #2d2d2d;
        }

        .project-card__desc {
          font-size: 0.92rem;
          color: #666;
          line-height: 1.65;
          margin-bottom: 16px;
        }

        .project-card__link {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ff6b35;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .project-card__link:hover {
          opacity: 0.75;
        }

        /* Testimonials */
        .testimonial-card {
          padding: 36px 32px;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .testimonial-card__quote-mark {
          font-size: 4rem;
          line-height: 0.8;
          margin-bottom: 16px;
          font-family: Georgia, serif;
          opacity: 0.7;
        }

        .testimonial-card__text {
          font-size: 0.97rem;
          line-height: 1.75;
          color: #555;
          margin-bottom: 28px;
          font-style: italic;
        }

        .testimonial-card__author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-card__avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          color: white;
          flex-shrink: 0;
        }

        .testimonial-card__name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #2d2d2d;
        }

        .testimonial-card__role {
          font-size: 0.82rem;
          color: #888;
          margin-top: 2px;
        }

        /* Newsletter */
        .newsletter-section {
          background: linear-gradient(135deg, #ff6b35 0%, #e85520 40%, #cc4400 100%);
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }

        .newsletter-inner {
          position: relative;
        }

        .newsletter__deco {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .newsletter__deco--1 {
          width: 500px;
          height: 500px;
          top: -300px;
          right: -200px;
          background: rgba(255,255,255,0.07);
        }

        .newsletter__deco--2 {
          width: 300px;
          height: 300px;
          bottom: -200px;
          left: -100px;
          background: rgba(255,209,102,0.15);
        }

        .newsletter__content {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 620px;
          margin: 0 auto;
        }

        .newsletter__heading {
          color: #ffffff;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin: 16px 0 20px;
        }

        .newsletter__sub {
          color: rgba(255,255,255,0.82);
          font-size: 1.05rem;
          margin-bottom: 36px;
          line-height: 1.7;
        }

        .newsletter__form {
          display: flex;
          gap: 12px;
          max-width: 520px;
          margin: 0 auto;
        }

        .newsletter__input {
          flex: 1;
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.12);
          color: white;
          font-size: 1rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          backdrop-filter: blur(8px);
        }

        .newsletter__input::placeholder {
          color: rgba(255,255,255,0.55);
        }

        .newsletter__input:focus {
          border-color: rgba(255,255,255,0.7);
        }

        .newsletter__success {
          background: rgba(255,255,255,0.18);
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 20px;
          color: white;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .newsletter__note {
          margin-top: 16px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 900px) {
          .hero__inner {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .hero__sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hero__actions {
            justify-content: center;
          }

          .hero__visual {
            height: 300px;
            max-width: 480px;
            margin: 0 auto;
          }

          .hero__card--main { right: 40px; }
          .hero__card--secondary { left: 40px; }
          .hero__card--tertiary { right: 60px; }
        }

        @media (max-width: 600px) {
          .newsletter__form {
            flex-direction: column;
          }

          .hero__visual {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
