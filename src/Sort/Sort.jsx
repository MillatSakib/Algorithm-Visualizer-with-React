import React from "react";
import Card from "./Card";
import bubble from "../assets/bubble.jpeg";
import counting from "../assets/counting.jpg";
import selection from "../assets/selection.jpeg";

const Sort = () => {
  return (
    <div>
      <div className="grid gird-cols-1 md:flex gap-8 items-center justify-center">
        <Card
          title="Bubble Sort"
          description="The Easiest Sorting Algorithm for Beginner."
          linkTo="/sort/bubblesort"
          imgLink={bubble}
        ></Card>{" "}
        <Card
          title="Selection Sort"
          description="Efficient for Small Dataset, Limited memory and Real time processing."
          linkTo="/sort/selectionsort"
          imgLink={selection}
        ></Card>
      </div>
      {/* <div className="mt-8 grid gird-cols-1 md:flex gap-8 items-center justify-center">
        <Card
          title="Counting Sort"
          description="The effcicent sorting algorithm for Integer number."
          linkTo="/sort/countingsort"
          imgLink={counting}
        ></Card>
      </div> */}
    </div>
  );
};

export default Sort;
