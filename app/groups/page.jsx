import GroupCard from "@/components/GroupCard"
import groups from "@/data/groups.json"

const GroupPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div>
          <h1 className="text-3xl font-bold">Colorado Springs Groups</h1>
          <p className="text-gray-600 text-lg">Explore the groups available in our area.</p>
          <div className="border border-gray-100 my-4"></div>
        </div>
        {groups.length === 0 ? (
          <p>No groups found</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {groups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
};

export default GroupPage;
