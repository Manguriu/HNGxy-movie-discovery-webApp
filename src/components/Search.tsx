"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import FeaturedCard from "./Featured/FeaturedCard";

type Props = {};

function Search({}: Props) {
  const [searchMovies, setSearchMovies] = useState<any>(null);
  const [name, setName] = useState("");
  const [load, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkxNGJkNTQ0YmQxN2M1NTZjOGE5MGVhMmY2YmY4YiIsInN1YiI6IjY0ZmY1MzQ1ZWZlYTdhMDBlMDM0YzYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeH1DhJJPZrGOzzuuAGND4YRD6DG-EB4d991CL5nuYM",
    },
  };

  const searchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      const firstResult = response.data.results[0];
      console.log("first123", firstResult);
      if (firstResult) {
        setSearchMovies(firstResult);
      } else {
        setSearchMovies(null);
      }
    } catch (error) {
      console.error("Error searching for the movie", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById(
      "searchData"
    ) as HTMLInputElement;
    inputElement?.addEventListener("input", () => {
      setName(inputElement.value);
      searchMovie();
    });

    return () => {
      inputElement?.addEventListener("input", () => {
        setName(inputElement.value);
        searchMovie();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className=" lg:gap-10 w-[525px] max-sm:w-[300px] max-lg:absolute max-sm:absolute max-lg:-bottom-[31rem] max-sm:-bottom-[38rem] max-lg:left-0  flex items-center gap-2 p-2 lg:border lg:border-white max-lg:border max-lg:border-black max-lg:pb-2  rounded-lg text-white">
        <input
          type="text"
          id="searchData"
          value={name}
          placeholder="What do you want to watch??"
          className="max-sm:w-full w-full max-sm:text-[10px] text-base leading-normal text-white max-lg:text-black text-slate-gray lg:pl-5 max-sm:p-1 lg:outline-none max-sm:rounded-full bg-inherit "
        />

        <button
          className="flex items-center font-extrabold max-sm:relative "
          onClick={searchMovie}
        >
          <span className="lg:text-white max-lg:text-black z-10">
            <AiOutlineSearch />
          </span>
        </button>
        <div className="absolute -bottom-10">
          {searchMovies && (
            <FeaturedCard id={searchMovies.id} moData={searchMovies} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
