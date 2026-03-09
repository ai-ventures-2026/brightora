import { Link } from 'react-router-dom'

const services = [
  {
    id: 'branding',
    icon: '◆',
    title: 'Branding & Identity',
    tagline: 'Make an unforgettable first impression.',
    desc: 'Your brand is the sum of every impression you make. We craft visual identities that capture your essence, communicate your values, and stand out in crowded markets. From logo design to full brand systems, we build brands that endure.',
    features: [
      'Logo design & brand mark creation',
      'Color palette & typography systems',
      'Brand guidelines & style guides',
      'Stationery & collateral design',
      'Brand voice & messaging frameworks',
      'Brand audit & repositioning',
    ],
    gradient: 'linear-gradient(135deg, #ff6b35 0%, #ffd166 100%)',
    color: '#ff6b35',
    pricing: [
      { tier: 'Starter', price: '$3,500', desc: 'Perfect for startups and solo creators. Core identity package.' },
      { tier: 'Growth', price: '$8,500', desc: 'Complete brand system with guidelines and collateral.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'Full brand strategy, identity, and rollout support.' },
    ],
  },
  {
    id: 'ux',
    icon: '▲',
    title: 'UI/UX Design',
    tagline: 'Beautiful interfaces that actually convert.',
    desc: 'Great UX is invisible — users just feel like things work. We combine user research, behavioral psychology, and craft-led design to create interfaces that are intuitive, accessible, and genuinely delightful to use.',
    features: [
      'User research & persona development',
      'Information architecture & user flows',
      'Wireframing & interactive prototyping',
      'High-fidelity UI design (Figma)',
      'Usability testing & iteration',
      'Design system creation',
    ],
    gradient: 'linear-gradient(135deg, #118ab2 0%, #06d6a0 100%)',
    color: '#118ab2',
    pricing: [
      { tier: 'Starter', price: '$5,000', desc: 'UX audit + redesign of core flows for existing products.' },
      { tier: 'Growth', price: '$12,000', desc: 'Full product design including research, prototypes, and handoff.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'End-to-end product design partnership with ongoing support.' },
    ],
  },
  {
    id: 'marketing',
    icon: '●',
    title: 'Digital Marketing',
    tagline: 'Growth that compounds over time.',
    desc: 'We build marketing engines that don\'t just drive traffic — they create customers who stay. Our data-driven approach combines paid media, SEO, content, and email to build sustainable, scalable growth for your business.',
    features: [
      'Paid social & search (Meta, Google)',
      'SEO strategy & content marketing',
      'Email marketing & automation',
      'Social media management',
      'Analytics, attribution & reporting',
      'Conversion rate optimization (CRO)',
    ],
    gradient: 'linear-gradient(135deg, #e85520 0%, #ff6b35 100%)',
    color: '#e85520',
    pricing: [
      { tier: 'Starter', price: '$2,500/mo', desc: 'Single channel management with monthly reporting.' },
      { tier: 'Growth', price: '$6,000/mo', desc: 'Multi-channel strategy with bi-weekly check-ins.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'Full-service marketing department as a service.' },
    ],
  },
  {
    id: 'content',
    icon: '■',
    title: 'Content Creation',
    tagline: 'Content that builds authority and drives action.',
    desc: 'In a world drowning in noise, great content is the sharpest differentiator. We produce written content, video scripts, visual assets, and multimedia storytelling that positions your brand as the definitive voice in your space.',
    features: [
      'Long-form articles & thought leadership',
      'Video scripts & production direction',
      'Social media content calendars',
      'Podcast production & editing',
      'Infographics & data visualization',
      'Case studies & white papers',
    ],
    gradient: 'linear-gradient(135deg, #2d2d2d 0%, #555 100%)',
    color: '#444',
    pricing: [
      { tier: 'Starter', price: '$1,800/mo', desc: '8 pieces of content per month across 2 formats.' },
      { tier: 'Growth', price: '$4,500/mo', desc: '20 pieces per month, full content strategy included.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'Full editorial operation with dedicated content team.' },
    ],
  },
  {
    id: 'courses',
    icon: '★',
    title: 'Online Courses',
    tagline: 'Turn your expertise into a scalable revenue stream.',
    desc: 'We design, produce, and launch online courses that genuinely transform learners. Our learning scientists, curriculum designers, and production team handle everything — from initial concept to a live, fully branded course platform.',
    features: [
      'Learning outcomes & curriculum design',
      'Script writing & lesson planning',
      'Video production & editing',
      'Platform setup (Teachable, Kajabi, etc.)',
      'Assessment & certification design',
      'Launch strategy & marketing',
    ],
    gradient: 'linear-gradient(135deg, #ffd166 0%, #ff6b35 100%)',
    color: '#b8860b',
    pricing: [
      { tier: 'Starter', price: '$9,000', desc: 'Up to 5 modules, 15 lessons. Full production included.' },
      { tier: 'Growth', price: '$22,000', desc: 'Up to 10 modules with community & certification setup.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'Multi-course platform with custom LMS and white-labeling.' },
    ],
  },
  {
    id: 'web',
    icon: '◈',
    title: 'Web Development',
    tagline: 'Fast, beautiful websites built to convert.',
    desc: 'We build websites and web applications that combine stunning design with rock-solid engineering. Every site we build is fast, accessible, SEO-optimized, and designed to turn visitors into customers.',
    features: [
      'Marketing & landing page development',
      'E-commerce development (Shopify, WooCommerce)',
      'Custom web application development',
      'Performance optimization & Core Web Vitals',
      'CMS integration (WordPress, Contentful)',
      'Ongoing maintenance & support plans',
    ],
    gradient: 'linear-gradient(135deg, #06d6a0 0%, #118ab2 100%)',
    color: '#06d6a0',
    pricing: [
      { tier: 'Starter', price: '$5,500', desc: 'Up to 8 pages. Design + development. CMS included.' },
      { tier: 'Growth', price: '$14,000', desc: 'Custom design system, 20+ pages, e-commerce ready.' },
      { tier: 'Enterprise', price: 'Custom', desc: 'Full web application with custom integrations and SLA.' },
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We immerse ourselves in your world — your goals, challenges, audience, and competitive landscape. No assumptions, just deep listening.',
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'From insights comes direction. We define the strategic framework that will guide every creative and technical decision downstream.',
  },
  {
    step: '03',
    title: 'Creation',
    desc: 'Our team crafts the work — iteratively, collaboratively, and always with your goals front and center. You see progress early and often.',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    desc: 'We don\'t disappear after launch. We measure results, optimize performance, and help you build on the foundation we created together.',
  },
]

export default function Services() {
  return (
    <div className="services-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>Services That Move<br />the Needle</h1>
          <p>End-to-end creative and digital services, built for brands that refuse to be ordinary.</p>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="section services-list">
        <div className="container">
          {services.map(({ id, icon, title, tagline, desc, features, gradient, color, pricing }, idx) => (
            <div
              key={id}
              id={id}
              className={`service-item${idx % 2 === 1 ? ' service-item--reverse' : ''}`}
            >
              {/* Visual */}
              <div className="service-item__visual" style={{ background: gradient }}>
                <div className="service-item__icon">{icon}</div>
                <div className="service-item__deco" />
              </div>

              {/* Content */}
              <div className="service-item__content">
                <span className="section-label" style={{ color, background: `${color}15` }}>
                  {tagline}
                </span>
                <h2 className="service-item__title">{title}</h2>
                <p className="service-item__desc">{desc}</p>

                <ul className="service-item__features">
                  {features.map((f) => (
                    <li key={f} className="service-item__feature" style={{ '--accent': color }}>
                      <span className="service-item__feature-dot" style={{ background: color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pricing-tiers">
                  {pricing.map(({ tier, price, desc: pdesc }) => (
                    <div key={tier} className="pricing-tier">
                      <div className="pricing-tier__name">{tier}</div>
                      <div className="pricing-tier__price" style={{ color }}>{price}</div>
                      <div className="pricing-tier__desc">{pdesc}</div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section section-dark process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ background: 'rgba(255,107,53,0.2)', color: '#ffd166' }}>
              How We Work
            </span>
            <h2>Our Process</h2>
            <p>Simple, transparent, collaborative. Here's how a Brightora engagement works from first hello to launch day.</p>
          </div>

          <div className="grid-4">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="process-card">
                <div className="process-card__step">{step}</div>
                <h3 className="process-card__title">{title}</h3>
                <p className="process-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section services-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Not Sure Where to Start?</span>
          <h2>Let's Figure It Out Together</h2>
          <p style={{ maxWidth: '520px', margin: '20px auto 36px' }}>
            Book a free 30-minute discovery call. We'll listen to your challenges and point you toward the right solution — no hard sell, ever.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        /* Services List */
        .service-item {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: center;
          padding: 72px 0;
          border-bottom: 1px solid #eee;
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .service-item--reverse {
          grid-template-columns: 1.4fr 1fr;
        }

        .service-item--reverse .service-item__visual {
          order: 2;
        }

        .service-item--reverse .service-item__content {
          order: 1;
        }

        .service-item__visual {
          border-radius: 24px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .service-item__icon {
          font-size: 5rem;
          color: rgba(255,255,255,0.5);
          position: relative;
          z-index: 1;
          text-shadow: 0 4px 24px rgba(0,0,0,0.2);
        }

        .service-item__deco {
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }

        .service-item__title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 16px 0 18px;
          color: #2d2d2d;
        }

        .service-item__desc {
          font-size: 1rem;
          line-height: 1.75;
          color: #666;
          margin-bottom: 24px;
        }

        /* Features list */
        .service-item__features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }

        .service-item__feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #555;
          font-weight: 500;
        }

        .service-item__feature-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Pricing tiers */
        .pricing-tiers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 8px;
        }

        .pricing-tier {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 16px;
          border: 1px solid #eee;
        }

        .pricing-tier__name {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 6px;
        }

        .pricing-tier__price {
          font-size: 1.1rem;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .pricing-tier__desc {
          font-size: 0.78rem;
          color: #888;
          line-height: 1.5;
        }

        /* Process */
        .process-section {
          background: #1a1a1a;
        }

        .process-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 36px 28px;
          transition: background 0.2s, transform 0.2s;
        }

        .process-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }

        .process-card__step {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ff6b35, #ffd166);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 20px;
        }

        .process-card__title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .process-card__desc {
          font-size: 0.92rem;
          color: #888;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .service-item,
          .service-item--reverse {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .service-item--reverse .service-item__visual,
          .service-item--reverse .service-item__content {
            order: unset;
          }

          .service-item__visual {
            height: 220px;
          }

          .service-item__features {
            grid-template-columns: 1fr;
          }

          .pricing-tiers {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .service-item {
            padding: 48px 0;
          }
        }
      `}</style>
    </div>
  )
}
