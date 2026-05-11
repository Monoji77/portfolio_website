import { AboutTimeline } from './AboutTimeline'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'

export function AboutSection() {
  return (
    <section className="section-band section-band--light" id="about">
      <div className="section-inner">
        <SectionHeading
          className="about-section__heading"
          description=""
          eyebrow="About"
          title={
            <>
              Perpetually building practical, <span className="about-section__heading-highlight">data-driven</span>{' '}
              products across risk analytics, machine learning, and data engineering
            </>
          }
        />

        <div className="about-section__layout">
          <SectionReveal>
            <AboutTimeline />
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
