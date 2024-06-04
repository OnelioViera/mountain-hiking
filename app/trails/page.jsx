import TrailCard from "@/components/TrailCard";
import trails from "@/data/trails.json";

const TrailPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div>
          <h1 className="text-3xl font-bold">Colorado Springs Trails</h1>
          <p className="text-gray-600 text-lg">Explore the trails available in our area.</p>
          <div className="border border-gray-100 my-4"></div>
      </div>
        {trails.length === 0 ? (
          <p>No trails found</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trails.map((trail) => (
                <TrailCard key={trail._id} trail={trail} />
              ))}
              </div>
        )}
      </div>
    </section>
  )
}

export default TrailPage;
