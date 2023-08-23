import { useEffect } from "react";
import { getRandomDimension } from "./utils/random";
import { useState } from "react";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

const SEARCH = 10;

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    newLocation === ""
      ? emptyError(true) & fetchDimension(SEARCH)
      : fetchDimension(newLocation);
  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => {
        setCurrentLocation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const staticDimension = () => {
    fetchDimension(SEARCH);
  };

  useEffect(() => {
    staticDimension();
    setTimeout(() => {
      const randomDimension = getRandomDimension(126);
      fetchDimension(randomDimension);
    }, 1000);
  }, []);

  return (
    <main className="min-h-screen bg-cover text-black bg-[url(/images/fondo1.jpeg)] bg-bottom px-4 font-Nunito grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative overflow-hidden">
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
    </main>
  );
}

export default App;
