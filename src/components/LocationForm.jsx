const LocationForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="overflow-hidden w-[260px] rounded-full bg-white pl-4 border-[4px] flex justify-between font-bold mt-8 min-[500px]:w-[350px]">
            <input
                className="w-[66%] outline-none text-sm font-light min-[500px]:text-base min-[500px]:font-bold"
                min={1}
                max={126}
                id="newLocation"
                placeholder="Type a Location id..."
                type="number"
            />
            <button className="bg-light-yellow p-2 px-6 border-l-4 rounded-full text-lg">Search</button>
        </form>
    )
}

export default LocationForm