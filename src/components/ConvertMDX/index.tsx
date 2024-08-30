'use client'

import { Callout } from '@/components/ConvertMDX/contents/Callout'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'

type Props = {
  html: string
}

export const ConvertMDX = ({ html }: Props) => {
  const Component = useMDXComponent(html)

  const components = {
    Callout: Callout,
    Image: NextImage
  }
  return (
    <div className="prose max-w-full">
      <Component components={components} />
    </div>
  )
}
