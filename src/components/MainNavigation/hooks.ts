import { useState } from 'react'

export const useMainNavigation = () => {
  const [open, setOpen] = useState(false)

  return {
    open,
    setOpen
  }
}
