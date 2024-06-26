const CurrentNews = () => {
  return (
    <>
    <div className="">
      <h1 className="text-2xl font-semibold text-center text-[#6a0923] lg:text-4xl md:text-3xl mb-4 mt-4 py-2">Current News</h1>
      </div>
      <div>
        <div className="container-xl lg:container m-auto lg:mb-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded-lg px-6 md:px-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold lg:text-2xl md:text-xl border-b-2 border-b-[#6a0923] pb-4">New Trail Opening</h2>
              <p className="text-md text-gray-600 my-4">A new trail is opening in the area. The trail is 5 miles long and is perfect for hiking and biking. The trail will be open to the public on May 1st. Be sure to check it out!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold lg:text-2xl md:text-xl border-b-2 border-b-[#6a0923] pb-4">Trail Maintenance</h2>
              <p className="text-md text-gray-600 my-4">Trail maintenance is scheduled for May 15th. The trail will be closed for the day while crews work to improve the trail. The trail will reopen on May 16th. Thank you for your patience!</p>
            </div>
          </div>
        </div>
      </div>
      </>
  )
};

export default CurrentNews;
