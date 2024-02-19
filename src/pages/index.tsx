import HShadow from "@/components/HShadow";
import LatestCV from "@/components/LatestCV";


export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="lg:px-9 px-5 grid grid-cols-12 grid-rows-2">
        <div className="col-start-1 col-end-9 row-start-1">
          <h1 className="text-8xl font-bold relative">ANDREW SLEIGH

          </h1>
          <h2 className="text-7xl opacity-90">UI DESIGN + DEV</h2>

        </div>
        <section className="lg:my-16 row-start-2 col-span-8">

          <p>I am a UI designer and developer currently based in Plymouth, UK.</p>
          <div className="lg:mt-12">
            <div className="flex flex-row gap-5">
              <LatestCV />
            </div>
          </div>

        </section>
        <div className="col-start-8 col-end-12 row-start-1 row-end-2">
          <HShadow />
        </div>
      </div>


    </div>

  )
}