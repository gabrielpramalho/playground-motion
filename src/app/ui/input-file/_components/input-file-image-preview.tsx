'use client'

import { useMemo } from 'react'
import { useFileInput } from './input-file'
import { User } from 'lucide-react'

export function InputFileImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  return (
    <div className="size-20 rounded-full border border-neutral-800/60 flex justify-center items-center">
      {previewURL === null ? (
        <div className='flex justify-center items-center'>
          <User className='size-10 text-neutral-800/60' />
        </div>
      ) : (
        <img
          className="object-cover w-100 size-20 rounded-full animate-fade-in"
          src={previewURL}
          alt=""
        />
      )}
    </div>
  )
}
