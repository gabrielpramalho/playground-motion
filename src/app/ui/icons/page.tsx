import { CheckIcon } from "./_components/check-icon";
import { CloseIcon } from "./_components/close-icon";
import { RotateIcon } from "./_components/rotate-icon";

export default function Icons() {
  return (
    <div className="flex flex-1 justify-center items-center py-40">
      <div className="flex gap-4">
        <CloseIcon />
        <CheckIcon />
        <RotateIcon />
      </div>
    </div>
  )
}
