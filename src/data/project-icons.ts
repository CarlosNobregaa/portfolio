import {
  Beef,
  Bot,
  Boxes,
  Building2,
  Handshake,
  Mail,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { Project } from './projects'

/** Shared by the project cards and the project detail pages. */
export const PROJECT_ICONS: Record<Project['icon'], LucideIcon> = {
  Building2,
  Users,
  Bot,
  Mail,
  Handshake,
  ShieldCheck,
  Beef,
  Boxes,
}
