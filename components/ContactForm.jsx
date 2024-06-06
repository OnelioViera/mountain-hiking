const ContactForm = () => {
    return (
        <div className=" text-center justify-center">
            <form
                className="mt-20 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center bg-green-600 py-6 px-6 rounded-xl shadow-lg"
            >
                <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
                    <label htmlFor="location" className="sr-only">Location</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Enter Location (City, State, Zip, etc"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="w-full md:w-2/5 md:pl-2">
                    <label htmlFor="property-type" className="sr-only">Property Type</label>
                    <select
                        id="property-type"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        <option value="All">All</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Studio">Studio</option>
                        <option value="Condo">Condo</option>
                        <option value="House">House</option>
                        <option value="Cabin Or Cottage">Cabin or Cottage</option>
                        <option value="Loft">Loft</option>
                        <option value="Room">Room</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-[#6a0923] text-white hover:bg-black focus:outline-none focus:ring focus:ring-[#6a0923]"
                >
                    Search
                </button>
            </form>
        </div>
    )
};

export default ContactForm;
