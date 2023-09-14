import React from "react";
import Sidebar from "../movie/[movieid]/Sidebar";

type Props = {};

function page({}: Props) {
  return (
    <section className="movie-overview">
      <Sidebar />
      <div></div>
    </section>
  );
}

export default page;
