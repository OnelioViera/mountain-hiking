import TrailBox from "./TrailBox";

const TrailBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

          <TrailBox
            heading="Find Trails"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: 'Broswe Trails',
              link: '/trails',
              backgroundColor: 'bg-gray-500'
            }}>
            List of trails in the area.
          </TrailBox>

          <TrailBox
            heading="Find Hiking Groups"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: 'Broswe Groups',
              link: '/groups',
              backgroundColor: 'bg-gray-500'
            }}>
            List of hiking groups in the area.
          </TrailBox>

        </div>
        </div>
    </section>
  )
}

export default TrailBoxes;
