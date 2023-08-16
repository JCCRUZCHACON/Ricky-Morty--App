import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {
  const [residentInfo, setResidentInfo] = useState(null)
useEffect(() => {
  axios
    .get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
  
}, [])

  return (
    <article>
      <header>
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 p-2">
          <div className="h-[10px] aspect-square bg-green-500 rounded-full"></div>
          {residentInfo?.status}
        </div>
      </header>
      <section>
        <h3>{residentInfo?.name}</h3>
        <ul>
          <li>Species:{residentInfo?.species} </li>
          <li>Origin: {residentInfo?.origin.name} </li>
          <li>Times appear: {residentInfo?.episode.length} </li>
        </ul>

      </section>
    </article>
  )
}
export default ResidentCard