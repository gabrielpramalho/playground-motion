'use client'

import type { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './input-file'

export type ControlProps = ComponentProps<'input'>

export function InputFileControl({ multiple = false, ...props }: ControlProps) {
  const { id, onFileSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFileSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      multiple={multiple}
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
