import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Zoe Hartwell',
    role: 'Creative Director & Co-Founder',
    bio: 'With 14 years in brand design, Zoe has shaped the visual identity of over 80 brands across four continents. She believes that great design is the most powerful business tool.',
    initials: 'ZH',
    gradient: 'linear-gradient(135deg, #ff6b35, #ffd166)',
    specialty: 'Brand Strategy · Visual Identity',
  },
  {
    name: 'Darius Okafor',
    role: 'Head of Digital & Co-Founder',
    bio: 'Former growth lead at two unicorn startups, Darius brings a data-first mindset to creative problems. He architected campaigns that generated over $50M in attributable revenue.',
    initials: 'DO',
    gradient: 'linear-gradient(135deg, #118ab2, #06d6a0)',
    specialty: 'Growth Marketing · Analytics',
  },
  {
    name: 'Mei-Lin Torres',
    role: 'Head of Education & Curriculum',
    bio: 'A learning scientist turned course creator, Mei-Lin has designed curricula used by 50,000+ students. She believes that the best learning feels like play.',
    initials: 'MT',
    gradient: 'linear-gradient(135deg, #2d2d2d, #666)',
    specialty: 'Instructional Design · EdTech',
  },
]

const awards = [
  {
    year: '2024',
    title: 'Agency of the Year',
    org: 'Creative Circle Awards',
    icon: '★',
    color: '#ffd166',
  },
  {
    year: '2023',
    title: 'Best Brand Campaign',
    org: 'D&AD Pencil Awards',
    icon: '◆',
    color: '#ff6b35',
  },
  {
    year: '2023',
    title: 'EdTech Innovator Award',
    org: 'Learning & Development Summit',
    icon: '▲',
    color: '#06d6a0',
  },
  {
    year: '2022',
    title: 'Top Digital Agency',
    org: 'Clutch Global Leaders',
    icon: '●',
    color: '#118ab2',
  },
]

const values = [
  {
    title: 'Bold by Default',
    desc: 'We never play it safe. Every project is an opportunity to do something that has never been done before. Safe is invisible; bold is memorable.',
    icon: '◆',
    color: '#ff6b35',
  },
  {
    title: 'Craft Over Speed',
    desc: 'We take the time to get things right. Quality work endures; rushed work has to be redone. Our obsession with craft shows in every pixel and every word.',
    icon: '●',
    color: '#ffd166',
  },
  {
    title: 'Growth Mindset',
    desc: 'We are permanent students. We invest in learning, experimentation, and staying at the frontier — because our clients deserve partners who are always evolving.',
    icon: '▲',
    color: '#118ab2',
  },
  {
    title: 'Radical Transparency',
    desc: 'No black boxes, no jargon, no spin. We tell our clients the truth — about timelines, budgets, and results — because trust is built on honesty, not good news.',
    icon: '■',
    color: '#06d6a0',
  },
]

const milestones = [
  { year: '2016', event: 'Brightora founded in a Shoreditch co-working space with 3 people and 1 client.' },
  { year: '2018', event: 'Expanded into digital marketing; team grows to 12. Launched first online course product.' },
  { year: '2020', event: 'Pivoted education arm to full EdTech platform. 10,000 students in first year.' },
  { year: '2022', event: 'Opened New York office. Named Top Digital Agency by Clutch for the first time.' },
  { year: '2024', event: 'Won Agency of the Year. 35-person team. 200+ projects. Still growing.' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>Built by Creatives,<br />Driven by Results</h1>
          <p>Brightora was born from a simple belief: that creativity and strategy are not opposites — they are partners. We exist to prove that point, every single day.</p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="section story-section">
        <div className="container story-inner">
          <div className="story-text">
            <span className="section-label">How We Got Here</span>
            <h2>From a Shoreditch Desk to a Global Agency</h2>
            <div className="divider" />
            <p>
              Brightora started in 2016 when three creatives — a brand designer, a digital marketer, and a learning scientist — got tired of watching brilliant ideas get executed badly. We knew there was a better way to build brands, run campaigns, and teach skills.
            </p>
            <p style={{ marginTop: '16px' }}>
              Today, we work with ambitious companies at every stage — from early-stage startups defining their identity to established brands reinventing themselves. We also run one of the fastest-growing creative education platforms in the industry.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our edge is simple: we are practitioners, not theorists. Everything we teach, we do. Everything we design, we believe in. That integrity shows in the results we deliver.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Work With Us</Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="story-timeline">
            <h3 className="story-timeline__heading">Our Journey</h3>
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="timeline-item">
                <div className="timeline-item__dot" />
                {i < milestones.length - 1 && <div className="timeline-item__line" />}
                <div className="timeline-item__content">
                  <span className="timeline-item__year">{year}</span>
                  <p className="timeline-item__event">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section section-alt team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Team</span>
            <h2>Creative Minds,<br />Strategic Hearts</h2>
            <p>Three co-founders. Thirty-five team members. One shared obsession: doing the best work of our lives, for clients who dare to be different.</p>
          </div>

          <div className="grid-3">
            {team.map(({ name, role, bio, initials, gradient, specialty }) => (
              <div key={name} className="team-card card">
                <div className="team-card__avatar" style={{ background: gradient }}>
                  {initials}
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{name}</h3>
                  <div className="team-card__role">{role}</div>
                  <p className="team-card__bio">{bio}</p>
                  <div className="team-card__specialty">
                    {specialty.split(' · ').map((s) => (
                      <span key={s} className="badge badge-orange">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>The Principles That<br />Guide Everything We Do</h2>
          </div>

          <div className="grid-2">
            {values.map(({ title, desc, icon, color }) => (
              <div key={title} className="value-card">
                <div className="value-card__icon" style={{ color, background: `${color}18` }}>
                  {icon}
                </div>
                <div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="section section-dark awards-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ background: 'rgba(255,107,53,0.2)', color: '#ffd166' }}>
              Recognition
            </span>
            <h2>Awards &amp; Recognition</h2>
            <p>We're proud of the work. We're even prouder of what the industry thinks of it.</p>
          </div>

          <div className="grid-4">
            {awards.map(({ year, title, org, icon, color }) => (
              <div key={title} className="award-card">
                <div className="award-card__icon" style={{ color }}>{icon}</div>
                <div className="award-card__year">{year}</div>
                <div className="award-card__title">{title}</div>
                <div className="award-card__org">{org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Ready to Begin?</span>
          <h2>Let's Build Something<br />Extraordinary Together</h2>
          <p style={{ maxWidth: '520px', margin: '20px auto 36px' }}>
            Whether you're starting from scratch or scaling what already works — we'd love to be part of your story.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
            <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* Story */
        .story-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        /* Timeline */
        .story-timeline {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 36px 32px;
        }

        .story-timeline__heading {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ff6b35;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.82rem;
          margin-bottom: 28px;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 12px 1fr;
          gap: 0 16px;
          grid-template-rows: auto 1fr;
          position: relative;
        }

        .timeline-item__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          margin-top: 4px;
          grid-row: 1;
          flex-shrink: 0;
        }

        .timeline-item__line {
          width: 2px;
          background: linear-gradient(to bottom, #ffd166, rgba(255,209,102,0.1));
          margin: 2px auto 0;
          min-height: 36px;
          grid-column: 1;
          grid-row: 2;
        }

        .timeline-item__content {
          grid-column: 2;
          grid-row: 1 / 3;
          padding-bottom: 24px;
        }

        .timeline-item__year {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ff6b35;
        }

        .timeline-item__event {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin-top: 4px;
        }

        /* Team */
        .team-card {
          overflow: visible;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .team-card__avatar {
          height: 180px;
          border-radius: 20px 20px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          letter-spacing: -0.05em;
        }

        .team-card__body {
          padding: 28px;
        }

        .team-card__name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #2d2d2d;
          margin-bottom: 4px;
        }

        .team-card__role {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 14px;
        }

        .team-card__bio {
          font-size: 0.92rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 18px;
        }

        .team-card__specialty {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* Values */
        .value-card {
          display: flex;
          gap: 20px;
          padding: 28px;
          background: var(--off-white);
          border-radius: var(--radius-lg);
          align-items: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .value-card__icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .value-card__title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #2d2d2d;
          margin-bottom: 8px;
        }

        .value-card__desc {
          font-size: 0.93rem;
          color: #666;
          line-height: 1.7;
        }

        /* Awards */
        .awards-section {
          background: #1a1a1a;
        }

        .award-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: transform 0.2s, background 0.2s;
        }

        .award-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }

        .award-card__icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .award-card__year {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ff6b35;
          margin-bottom: 10px;
        }

        .award-card__title {
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .award-card__org {
          font-size: 0.82rem;
          color: #888;
        }

        @media (max-width: 900px) {
          .story-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .value-card {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
