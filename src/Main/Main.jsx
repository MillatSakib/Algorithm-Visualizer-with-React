import Card from "./Card";
import sort from "../assets/sort.png";
import search from "../assets/search.jpg";

const Main = () => {
  return (
    <div className="grid gird-cols-1 md:flex gap-8 items-center justify-center">
      <Card
        Navto={"/sort"}
        imageLink={sort}
        title="Sort"
        descirption="See Here How Sorting Algorithms are works."
      ></Card>
      <Card
        Navto={"/search"}
        imageLink={search}
        title="Search"
        descirption="See Here How Search Algorithms are works."
      ></Card>
    </div>
  );
};

export default Main;
