'use client'

import { CloudUpload } from 'lucide-react'
import { useFileInput } from './input-file'

export function InputFileTrigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="flex items-center justify-center p-6 border border-neutral-800/60 rounded-lg cursor-pointer group"
    >
      <div className="p-8 space-y-4">
        <div className="flex justify-center gap-2">
          <div className="group-hover:-translate-y-2 transition-transform duration-600 [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)]">
            <CloudUpload className="size-6" />
          </div>
        </div>
        <span className="block">Click or drop your files here</span>
      </div>
    </label>
  )
}
