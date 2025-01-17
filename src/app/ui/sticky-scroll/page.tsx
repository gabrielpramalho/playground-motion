import { ScrollArea } from '@/components/ui/scroll-area'

export default function StickyScrollPage() {
  return (
    <ScrollArea className="h-[500px] relative">
      <div>
        <p className=" text-8xl bg-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          natus voluptate modi reprehenderit quis autem id ut architecto, qui
          expedita sunt, eos rem error ex amet. Laudantium, repellat. Magnam,
          doloribus!
        </p>
      </div>
      <div className="bg-red-600 relative">
        <span className="sticky top-4">Sticky</span>
        <p className=" text-8xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          natus voluptate modi reprehenderit quis autem id ut architecto, qui
          expedita sunt, eos rem error ex amet. Laudantium, repellat. Magnam,
          doloribus!
        </p>
      </div>
      <div>
        <p className=" text-8xl bg-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          natus voluptate modi reprehenderit quis autem id ut architecto, qui
          expedita sunt, eos rem error ex amet. Laudantium, repellat. Magnam,
          doloribus!
        </p>
      </div>
    </ScrollArea>
  )
}
