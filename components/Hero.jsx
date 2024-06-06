import TrailBoxes from './TrailBoxes';

const Hero = () => {
  return (
    // <!-- Hero -->
    <section className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://cdn.backpacker.com/wp-content/uploads/2022/04/GettyImages-600968276-scaled-e1649714272520.jpg')" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="text-center object-center mt-10 lg:mt-40">
          <h1 className="font-extrabold text-4xl lg:text-6xl text-[#6a0923]">Colorado Springs</h1>
          <p className="text-2xl font-mono text-white my-4 lg:text-4xl">Mountain Hiking</p>
        </div>
        <div className='lg:my-10'>
          <TrailBoxes />
        </div>
      </div>
    </section>
  )
};

export default Hero
