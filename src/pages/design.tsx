import DesignBlock from "@/components/DesignBlock";


export default function Design() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="lg:px-9 px-5">
        <h1 className="text-7xl">DESIGN</h1>
      </div>
      <section className="lg:my-16 lg:px-9 px-5">
        <DesignBlock />
      </section>

    </div>
  )
}