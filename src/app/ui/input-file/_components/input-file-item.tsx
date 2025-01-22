import { formatBytes } from '@/utils/format-bytes'
import { Check } from 'lucide-react'

interface InputFileItemProps {
  name: string
  size: number
}

export function InputFileItem({ name, size }: InputFileItemProps) {
  return (
    <div className='flex gap-2 items-center'>
      <div>
        <Check size={14} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-xs text-zinc-500">{formatBytes(size)}</span>
      </div>
    </div>
  )
}
