import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination";

const INITIAL_PAGE = 1

const ResidentList = ({ residents, currentLocation }) => {
    const [currentpage, setCurrentpage] = useState(INITIAL_PAGE)

    const RESIDENTS_PER_PAGE = 12;

    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    const sliceStart = (currentpage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
    const residentInPage = residents.slice(sliceStart, sliceEnd)

    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    useEffect(() => {
        setCurrentpage(INITIAL_PAGE)
    }, [currentLocation])

    return (
        <section className="grid grid-rows-[auto_auto] place-items-center gap-20 max-w-[1024px] w-full">
            <section className="grid gap-8 grid-cols-[repeat(auto-fit,_260px)] place-items-center w-full justify-center">
                {
                    residentInPage.map((resident) => (<ResidentCard key={resident} residentUrl={resident} />))
                }
            </section>
            <section className="text-white mb-20">
                <Pagination pages={pages} setCurrentpage={setCurrentpage} currentpage={currentpage} />
            </section>
        </section>
    )
}

export default ResidentList