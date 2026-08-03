'use client'

import type { ProjectId } from '@/data/projects'
import { AldeaMockup } from './Aldea'
import { ApexMockup } from './Apex'
import { AutomedMockup } from './Automed'
import { ChatfyMockup } from './Chatfy'
import { FlowmailMockup } from './Flowmail'
import { IacougueMockup } from './Iacougue'
import { QualityGateMockup } from './QualityGate'
import { TemplateApiMockup } from './TemplateApi'

/**
 * Per-project interface reconstructions.
 *
 * Built in markup rather than screenshotted: the real products are private
 * client systems, and a static export must not ship images of customer data.
 * Every company, person, figure and date is invented — the layout, terminology
 * and screen structure are what mirror the real product.
 *
 * The Brazilian products are shown in Portuguese, which is the language their
 * real interfaces are in.
 *
 * `interactive` is off for the card thumbnails (where the whole tile is a link
 * and nested controls would swallow the click) and on for the detail pages.
 */
export function ProjectMockup({
  id,
  accent,
  interactive = false,
}: {
  id: ProjectId
  accent: string
  interactive?: boolean
}) {
  switch (id) {
    case 'aldea':
      return <AldeaMockup accent={accent} interactive={interactive} />
    case 'apex-crm':
      return <ApexMockup accent={accent} interactive={interactive} />
    case 'automed':
      return <AutomedMockup interactive={interactive} />
    case 'flowmail':
      return <FlowmailMockup accent={accent} interactive={interactive} />
    case 'chatfy':
      return <ChatfyMockup accent={accent} interactive={interactive} />
    case 'quality-gate':
      return <QualityGateMockup interactive={interactive} />
    case 'template-api':
      return <TemplateApiMockup accent={accent} interactive={interactive} />
    case 'iacougue':
      return <IacougueMockup interactive={interactive} />
  }
}
