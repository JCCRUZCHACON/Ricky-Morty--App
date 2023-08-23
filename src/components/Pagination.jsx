const Pagination = ({ pages, setCurrentpage, currentpage }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {pages.map((page) => (
        <li
          className={`h-12 aspect-square border-red  border-4 rounded-full flex justify-center items-center text-xl font-bold cursor-pointer ${
            currentpage === page &&
            "bg-black  border-4 border-green-apple"
          }`}
          onClick={() => setCurrentpage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
