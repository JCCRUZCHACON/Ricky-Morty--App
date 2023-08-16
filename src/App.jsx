import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value
    fetchDimension(newLocation)

  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension)
    
  }, []);


  return (
    <main  className="bg-black min-h-screen text-white fond1 pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fit,_260px)] mx-auto">
      <section className="">
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} />
      </section>
    </main>
  );
}

export default App;

{/* <animate-spin></animate-spin>  */}