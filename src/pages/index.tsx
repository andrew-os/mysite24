import HShadow from "@/components/HShadow";
import LatestCV from "@/components/LatestCV";


export default function Home() {
  return (
    <div className='flex min-h-screen flex-col overflow-hidden'>
      <div className="lg:px-9 px-5 lg:grid lg:grid-cols-12 lg:grid-rows-2">
        <div className="lg:col-start-1 lg:col-end-12 lg:col-end-10 xl:col-end-9 row-start-1 flex flex-col">
          <h1 className="lg:text-8xl text-4xl font-bold relative">ANDREW SLEIGH</h1>
          <h2 className="lg:text-7xl text-3xl opacity-90">UI DESIGN + DEV</h2>

        </div>
        <section className="lg:my-16 my-8 row-start-2 col-span-8">

          <p>I am a UI designer and developer currently based in Plymouth, UK.</p>
          <div className="lg:mt-12 mt-8">
            <div className="flex flex-row gap-5">
              <LatestCV />
            </div>
          </div>

        </section>
        <div className="xl:col-start-8 lg:col-start-9 col-end-12 row-start-1 row-end-2 relative hidden lg:block">
          <HShadow />
        </div>
      </div>


    </div>

  )
}