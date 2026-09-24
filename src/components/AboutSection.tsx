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
              A <span className="about-section__heading-highlight">Data Engineer</span> with a deep interest
              in statistics and machine learning, dedicated to building resilient, scalable data pipelines
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
