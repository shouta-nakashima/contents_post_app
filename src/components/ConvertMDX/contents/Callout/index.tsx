import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Callout = ({ children }: Props) => {
  return (
    <div className="my-6 flex items-center rounded-md border border-l-4 p-4">
      <div>{children}</div>
    </div>
  )
}
