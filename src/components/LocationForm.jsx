const LocationForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className="flex justify-center pb-6">
      <input
        className="text-black outline-none"
        min={1}
        id="newLocation"
        max={126}
        placeholder="type a location id... "
        type="number" 
      />

      <button className="bg-red-500 px-4">Search</button>
      
    </form>
    
  );
};
export default LocationForm
