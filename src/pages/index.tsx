import LatestCV from "@/components/LatestCV";


export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="lg:px-9 px-5">
        <h1 className="text-8xl font-bold">ANDREW SLEIGH</h1>
        <h2 className="text-7xl opacity-90">UI DESIGN + DEV</h2>
      </div>
      <section className="lg:my-16 lg:px-9 px-5">

        <p>I am a UI designer and developer currently based in Plymouth, UK.</p>
        <div className="lg:mt-12">
          <div className="flex flex-row gap-5">
            <LatestCV />
          </div>
        </div>

      </section>

    </div>

  )
}