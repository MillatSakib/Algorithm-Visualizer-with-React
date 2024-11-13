import React from "react";
import linear from "../assets/linear.png";
import binary from "../assets/binarySearch.png";
import Card from "./Card";

const Search = () => {
  return (
    <div>
      <div className="grid gird-cols-1 md:flex gap-8 items-center justify-center">
        <Card
          title="Linear Search"
          description="The easiest and more time comsuming algorithm"
          linkTo="/sort/linearsearch"
          imgLink={linear}
        ></Card>{" "}
        <Card
          title="Binary Search"
          description="One of the most effecient algorithm for searching"
          linkTo="/sort/binarysearch"
          imgLink={binary}
        ></Card>
      </div>
    </div>
  );
};

export default Search;
