/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchSearch from "../api/FetchSearch";
import searchicn from "../assets/icons/Searchicn.svg";

function SearchBar({ getsearchres }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const results = useMutation({
    mutationFn: (value) => {
      return FetchSearch(value);
    },
    onSuccess: (data) => {
      getsearchres(data);
      navigate("/search");
      setTimeout(() => {
        setSearchValue("");
      }, 2000);
    },
  });

  return (
    <main className="flex justify-center items-center mt-4">
      <form className="w-max h-12 border-2 border-gray-400 border-solid p-2 rounded-3xl flex items-center gap-5">
        <input
          type="text"
          className="w-[60vw] md:w-[35vw] outline-none bg-transparent active:bg-transparent"
          name="searchbar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="md:w-10 md:h-10 rounded-full bg-black pl-3 active:translate-y-1 duration-100"
          onClick={(e) => {
            e.preventDefault();
            results.mutate(searchValue);
          }}
        >
          <img src={searchicn} alt="searchicn" />
        </button>
      </form>
    </main>
  );
}

export default SearchBar;
