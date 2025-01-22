import { InputFile } from './_components/input-file'
import { InputFileControl } from './_components/input-file-control'
import { InputFileList } from './_components/input-file-list'
import { InputFileTrigger } from './_components/input-file-trigger'

export default function InputFilePage() {
  return (
    <div className="flex items-center justify-center pt-10">
      <InputFile className='space-y-4'>
        <InputFileControl multiple />
        <InputFileTrigger />
        <InputFileList />
      </InputFile>
    </div>
  )
}
