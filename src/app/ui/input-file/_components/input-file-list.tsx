'use client'

import { useFileInput } from './input-file'
import { InputFileItem } from './input-file-item'

export function InputFileList() {
  const { files } = useFileInput()

  return (
    <div>
      {files.map(file => {
        return (
          <InputFileItem name={file.name} size={file.size} key={file.name} />
        )
      })}
      <InputFileItem name={'teste.png'} size={125} key={'teste.png'} />
    </div>
  )
}
