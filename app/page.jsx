import Image from 'next/image';
import logo from '@/public/images/hiking-logo-3.png';
import TrailBoxes from '@/components/TrailBoxes';
import bgimage from '@/public/images/unsplashImage.png';

const MainPage = () => {
  return (
    <div className="text-center object-center">
      <h1 className="font-extrabold text-4xl lg:text-6xl mt-20 text-[#6a0923]">Colorado Springs</h1>
      <p className="text-2xl mt-4 lg:text-4xl">Mountain Hiking</p>
      <div className='grid place-content-center my-8'>
        <Image src={logo}
          alt='Hiking Logo'
          width={200}
          height={200}
        />
      </div>

      <TrailBoxes />

      <div className='my-6'>
        <Image
          src="/images/bgimage.png"
          alt="External Link"
          width={0}
          height={0}
          sizes='100vw'
          className="w-full h-auto"
        />


      </div>

    </div>
  )
}

export default MainPage;
