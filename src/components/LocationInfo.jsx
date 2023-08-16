const LocationInfo = ({currentLocation}) => {

  return (
    <section>
      <h1 className="p-10 w-[1200px] text-yellow-300 font-black">¡Welcome to the crazy universe</h1>
    <section>
      
      <h2>{currentLocation?.name}</h2>
      <ul>
        <li>Type: {currentLocation?.type}</li>
        <li>Dimension: {currentLocation?.dimension}</li>
        <li>Population: {currentLocation?.residents.length}</li>
      </ul>
    </section>
    </section>
  )
}
export default LocationInfo

