import Image from 'next/image';
import Link from 'next/link';

const TrailCard = ({ trail }) => {
  return (
    <div className='rounded-xl shadow-md relative mt-4'>
      {trail && trail.image && trail.image.length > 0 ? (
        <Image
          src={`/images/trails/${trail.image[0]}`}
          alt='Trail Image'
          height={0}
          width={0}
          sizes='100vw'
          className='w-full h-auto rounded-t-xl'
        />
      ) : (
        <div className='bg-gray-300 w-full h-40 rounded-t-xl' />
      )}
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-3'>
          <h3 className='text-2xl font-bold'>{trail?.name ?? 'Unknown Trail'}</h3>
          <h4 className='text-lg font-semibold pb-2 text-gray-600'>{trail?.location ?? 'Unknown Location'}</h4>
          <div className='text-gray-600'>Difficulty: {trail?.difficulty ?? 'Unknown Difficulty'}</div>
          <div className='text-gray-600'>Distance: {trail?.distance ?? 'Unknown Distance'} miles</div>
          <div className='text-gray-600'>Elevation Gain: {trail?.elevation ?? 'Unknown Elevation'}</div>
        </div>
        <p className='mt-2'>{trail?.description ?? 'No description available.'}</p>

        <div className="border border-gray-100 my-4"></div>

        <div className="flex flex-col lg:flex-row text-center mb-4">
          <Link
            href={trail.Link ?? '#'} target='_blank'
            className="h-[36px] bg-[#61ee76] hover:bg-[#4bb85b] text-black hover:text-white font-semibold px-4 py-2 rounded-lg text-center text-sm shadow-md mb-2 lg:mb-0 lg:mr-2"
          >
            <Image
              src="/images/trails/alltrails2.png"
              alt="External Link"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            AllTrails
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default TrailCard;
