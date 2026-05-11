import { principles, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { BlurText } from './reactbits/BlurText'
import { SpotlightCard } from './reactbits/SpotlightCard'

export function AboutSection() {
  return (
    <section className="section-band section-band--light" id="about">
      <div className="section-inner">
        <SectionHeading
          description="A quick read on how I approach analytical work, implementation, and communication."
          eyebrow="About"
          title="I like technical work that becomes easier to trust when it is seen, used, and explained."
        />

        <div className="about-section__layout">
          <SectionReveal>
            <SpotlightCard className="about-section__narrative">
              <span className="about-section__kicker">How I work</span>
              <BlurText
                animateBy="words"
                className="about-section__lead"
                delay={70}
                text={profile.aboutLead}
              />
              <p>{profile.aboutBody}</p>
              <p>{profile.aboutBodyExtended}</p>
            </SpotlightCard>
          </SectionReveal>

          <div className="about-section__principles">
            {principles.map((principle, index) => (
              <SectionReveal delay={index * 0.08} key={principle.title}>
                <SpotlightCard className="about-section__principle">
                  <span className="about-section__principle-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </SpotlightCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
