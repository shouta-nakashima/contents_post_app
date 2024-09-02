import { cn } from '@/components/shadcn/utils'

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DashboardShell = ({
  children,
  className,
  ...props
}: DashboardShellProps) => {
  return (
    <div className={cn('grid items-center gap-8', className)} {...props}>
      {children}
    </div>
  )
}
