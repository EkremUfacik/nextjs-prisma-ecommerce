"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const Search = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log(pathname);

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    console.log(e);
    const search = e.target.search.value;
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("search", search);
    replace(pathname + "?" + params);
    e.target.reset();
  };

  if (pathname !== "/") return null;

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto me-4"
      />
    </form>
  );
};

export default Search;
