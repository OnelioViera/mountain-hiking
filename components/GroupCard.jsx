import Image from 'next/image';
import Link from 'next/link';

const GroupCard = ({ group }) => {
  return (
    <div className='rounded-xl shadow-md relative mt-4'>
      {group && group.image && group.image.length > 0 ? (
        <Image
          src={`/images/groups/${group.image[0]}`}
          alt='Group Image'
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
          <h3 className='text-2xl font-bold'>{group?.name ?? 'Unknown Trail'}</h3>
        </div>
        <p className='mt-2'>{group?.description ?? 'No description available.'}</p>

        <div className="border border-gray-100 my-4"></div>

        <div className="flex flex-col lg:flex-row text-center mb-4">
          <Link
            href={group.Link ?? '#'} target='_blank'
            className="h-[36px] bg-[#ed1c40] hover:bg-[#b83a42] text-white hover:text-white px-4 py-2 rounded-lg text-center text-sm shadow-md mb-2 lg:mb-0 lg:mr-2"
          >
            <Image
              src="/images/groups/meetup2.png"
              alt="External Link"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Meetup
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default GroupCard;
