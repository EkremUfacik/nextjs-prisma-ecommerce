import Link from "next/link";

type props = {
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, currentPage }: props) => {
  const arrPaginate = Array(totalPages).fill(0);

  console.log(totalPages, currentPage);
  return (
    <div className="join flex justify-center my-20">
      {arrPaginate.map((_, index) => (
        <Link
          key={index}
          href={"?page=" + (index + 1)}
          className={`join-item btn btn-accent ${
            index + 1 === currentPage ? " btn-active" : ""
          }`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
