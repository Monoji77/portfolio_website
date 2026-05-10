import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Check,
  Copy,
  FileText,
  FolderGit2,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactLinks, profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SectionReveal } from './SectionReveal'
import { SpotlightCard } from './reactbits/SpotlightCard'

const iconMap = {
  Email: AtSign,
  GitHub: FolderGit2,
  LinkedIn: BriefcaseBusiness,
  Resume: FileText,
} as const

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const emailLink = contactLinks[0]

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 1800)

    return () => window.clearTimeout(timeoutId)
  }, [copied])

  async function handleCopyEmail() {
    if (!emailLink) {
      return
    }

    try {
      await navigator.clipboard.writeText(emailLink.value)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section-band section-band--light" id="contact">
      <div className="section-inner">
        <SectionHeading
          description="A final section that keeps the next step obvious: connect, review the work, and continue the conversation."
          eyebrow="Contact"
          title="If the way I work fits your team, let's talk."
        />

        <div className="contact-section__layout">
          <SectionReveal>
            <SpotlightCard className="contact-section__highlight">
              <span className="contact-section__availability">{profile.availability}</span>
              <h3>Available for analytics, risk, and data product conversations.</h3>
              <p>
                This portfolio is set up to give employers a fast read on how I think, what I build,
                and how I package technical work so it lands clearly.
              </p>

              <div className="contact-section__actions">
                <a className="button button--primary" href={emailLink?.href ?? '#contact'}>
                  Email me
                  <AtSign size={18} />
                </a>
                <button
                  aria-live="polite"
                  className="button button--ghost"
                  onClick={handleCopyEmail}
                  type="button"
                >
                  {copied ? (
                    <>
                      Copied
                      <Check size={18} />
                    </>
                  ) : (
                    <>
                      Copy email
                      <Copy size={18} />
                    </>
                  )}
                </button>
                <a className="button button--secondary" href="#projects">
                  Review projects
                </a>
              </div>
            </SpotlightCard>
          </SectionReveal>

          <div className="contact-section__links">
            {contactLinks.map((link, index) => {
              const Icon = iconMap[link.label as keyof typeof iconMap]
              const isExternal = link.href.startsWith('http')

              return (
                <SectionReveal delay={index * 0.06} key={link.label}>
                  <a
                    className="contact-section__link"
                    href={link.href}
                    rel={isExternal ? 'noreferrer' : undefined}
                    target={isExternal ? '_blank' : undefined}
                  >
                    <span className="contact-section__link-icon">
                      <Icon size={18} />
                    </span>
                    <span className="contact-section__link-copy">
                      <strong>{link.label}</strong>
                      <span>{link.value}</span>
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
