import { Camera, CloudUpload, File } from 'lucide-react'

export function InputFile() {
  return (
    <div>
      <label
        htmlFor="file"
        className="flex items-center justify-center p-6 border rounded-lg cursor-pointer group"
      >
        <div className='p-8'>
          <div className="flex justify-center gap-2">
            <div className="group-hover:-translate-y-2">
              <CloudUpload />
            </div>
          </div>
          <span>Click or drop your files here</span>
        </div>
      </label>

      <input type="file" name="file" id="file" className="sr-only" />
    </div>
  )
}
