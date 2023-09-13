"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

type Props = {};

function Search({}: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const apiKey = "7e914bd544bd17c556c8a90ea2f6bf8b";

  const searchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors here
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="w-[525px]  flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" sm:flex-1 max-sm:w-full text-base leading-normal text-white text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-gray-300 max-sm:rounded-full bg-inherit "
        />
        <nav className="flex max-sm:justify-end items-center max-sm:w-full font-extrabold">
          <button>
            <AiOutlineSearch />
          </button>
        </nav>
      </div>
    </section>
  );
}

export default Search;
