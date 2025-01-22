'use client'

import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentProps,
} from 'react'

export type InputFileProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFileSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function InputFile(props: InputFileProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFileSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles(state => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFileSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)