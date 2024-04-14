import React, { FC } from 'react'
import { Loader2, LucideProps } from 'lucide-react'
import { cn } from '../../lib/utils'
import "../styles.css";

interface SpinnerProps extends LucideProps {}

const Spinner: FC<SpinnerProps> = ({ className, ...props }) => {
  return (
    <div className={cn('mr-2 h-4 w-4 animate-spin', className)}>
      <Loader2 {...props} />
    </div>
  )
}

export default Spinner;