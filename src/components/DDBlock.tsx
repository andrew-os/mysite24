interface DProps{
  design: boolean
  dev: boolean
}

export default function DDBlock({design, dev}: DProps) {
  return (
    <div className="flex flex-row">
          {
            design ? (
              <div className="mr-10">
                <span className="w-8 h-8 bg-primary rounded-full block">
                  <span className="uppercase text-xxs font-bold inline-block mt-2 ml-3">Design</span>
                </span>
              </div>

            ):
            (
            null
            )
          }
          {
            dev ? (
               <div className="mr-10">
                <span className="w-8 h-8 bg-secondary rounded-full block">
                  <span className="uppercase text-xxs font-bold inline-block mt-2 ml-3">Dev</span>
                </span>
              </div>
            ):
            (
            null
            )
          }
        </div>
  )
}