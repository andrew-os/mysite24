import DevBlock from "@/components/DevBlock";


export default function Dev() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="lg:px-9 px-5">
        <h1 className="text-7xl">DEV</h1>
      </div>
      <section className="lg:my-16 lg:px-9 px-5">
        <DevBlock />
      </section>

    </div>
  )
}