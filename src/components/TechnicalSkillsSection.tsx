import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { AnimatedList } from './reactbits/AnimatedList'
import { skillGroups } from '../data/portfolio'

export function TechnicalSkillsSection() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const skillTitles = useMemo(() => skillGroups.map((group) => group.title), [])
  const activeSkill = skillGroups[activeSkillIndex] ?? skillGroups[0]

  return (
    <section className="section-band section-band--dark" id="skills">
      <div className="section-inner">
        <SectionHeading
          description="A more interactive view of the technical lanes I keep coming back to in projects."
          eyebrow="Technical Skills"
          title="The through-line is not one tool. It is the ability to connect data, logic, interface, and explanation."
        />

        <div className="skills-section__layout">
          <SectionReveal className="skills-section__list-shell">
            <AnimatedList
              className="skills-section__list"
              displayScrollbar={false}
              initialSelectedIndex={0}
              items={skillTitles}
              onItemSelect={(_, index) => setActiveSkillIndex(index)}
              showGradients={false}
            />
          </SectionReveal>

          <SectionReveal className="skills-section__detail-shell" delay={0.14}>
            <AnimatePresence mode="wait">
              <motion.article
                animate={{ opacity: 1, y: 0 }}
                className="skills-section__detail"
                exit={{ opacity: 0, y: 16 }}
                initial={{ opacity: 0, y: 16 }}
                key={activeSkill.id}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="skills-section__detail-kicker">Current focus</span>
                <h3>{activeSkill.title}</h3>
                <p className="skills-section__detail-summary">{activeSkill.summary}</p>

                <div className="skills-section__detail-meta">
                  <span>{activeSkill.capabilities.length} capabilities</span>
                  <span>{activeSkill.tools.length} tools in rotation</span>
                </div>

                <div className="skills-section__detail-block">
                  <h4>Capabilities</h4>
                  <ul className="detail-list detail-list--light">
                    {activeSkill.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>

                <div className="skills-section__detail-block">
                  <h4>Tools & patterns</h4>
                  <ul className="tag-row" aria-label={`${activeSkill.title} tools`}>
                    {activeSkill.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </AnimatePresence>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
