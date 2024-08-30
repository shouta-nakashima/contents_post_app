import { Loader2 } from 'lucide-react'
import { GithubIcon } from './icons/Github'

export const Icon = {
  spinner: Loader2,
  github: ({ ...props }) => <GithubIcon {...props} />
}
