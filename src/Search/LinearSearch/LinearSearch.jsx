import { useState, useEffect } from "react";

const LinearSearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [speed, setSpeed] = useState("");
  const [elementsCount, setElementsCount] = useState("");
  const [isGenerateEnabled, setIsGenerateEnabled] = useState(false);
  const [isSearchingNow, setIsSearchingNow] = useState(false);
  const [notFoundText, setNotFoundText] = useState(false);

  // Speed mappings in milliseconds
  const speedMap = {
    Slow: 1000,
    Medium: 500,
    Fast: 200,
  };

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (isSearchingNow) clearInterval(handleSearch.intervalId);
    };
  }, [isSearchingNow]);

  const handleInputChange = (e) => {
    setTarget(e.target.value);
    resetSearch();
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
    resetSearch();
  };

  const handleElementsCountChange = (e) => {
    const elementCount = e.target.value;
    setElementsCount(elementCount);
    setIsGenerateEnabled(true);

    const newArray = Array.from(
      { length: parseInt(elementCount) },
      () => Math.floor(Math.random() * 30) + 4
    );
    setArray(newArray);
    setFoundIndex(null);
    setCurrentIndex(null);
  };

  const handleGenerateArray = () => {
    const newArray = Array.from(
      { length: parseInt(elementsCount) },
      () => Math.floor(Math.random() * 30) + 4
    );
    setArray(newArray);
    setFoundIndex(null);
    setCurrentIndex(null);
  };

  const handleSearch = () => {
    setIsSearchingNow(true);
    setIsGenerateEnabled(false);
    setCurrentIndex(0);
    setFoundIndex(null);

    handleSearch.intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (array[prevIndex] === parseInt(target)) {
          setFoundIndex(prevIndex);
          setIsSearchingNow(false);
          setIsGenerateEnabled(true);
          clearInterval(handleSearch.intervalId);
          return prevIndex;
        }
        if (prevIndex === array.length - 1) {
          setIsSearchingNow(false);
          setIsGenerateEnabled(true);
          clearInterval(handleSearch.intervalId);
          setNotFoundText(true);
          return null;
        }
        return prevIndex + 1;
      });
    }, speedMap[speed]);
  };

  const resetSearch = () => {
    setCurrentIndex(null);
    setFoundIndex(null);
    setIsGenerateEnabled(!!elementsCount);
    setNotFoundText(false);
  };

  return (
    <div>
      <h2 className="text-center mb-10 font-bold text-2xl text-blue-500">
        Linear Search Visualizer
      </h2>
      <div className="flex gap-2 justify-center flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>Speed</div>
          <select
            className="select w-full max-w-48"
            value={speed}
            onChange={handleSpeedChange}
            disabled={isSearchingNow}
          >
            <option disabled value="">
              Select your speed.
            </option>
            <option value="Slow">Slow</option>
            <option value="Medium">Medium</option>
            <option value="Fast">Fast</option>
          </select>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div>Number of Elements</div>
          <select
            className="select w-full max-w-48"
            value={elementsCount}
            onChange={handleElementsCountChange}
            disabled={isSearchingNow}
          >
            <option disabled value="">
              Select your choice.
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div>Input Target Element</div>
          <input
            type="number"
            placeholder="Enter target number"
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-36"
            disabled={isSearchingNow}
          />
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="btn btn-primary"
            onClick={handleGenerateArray}
            disabled={!isGenerateEnabled}
          >
            Re-Generate List
          </button>
          <button
            className="btn btn-success"
            onClick={handleSearch}
            disabled={array.length === 0 || isSearchingNow || !target || !speed}
          >
            Start Search
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "20px",
            alignItems: "flex-end",
          }}
        >
          {array.map((value, index) => (
            <div
              key={index}
              style={{
                height: `${value * 10}px`,
                width: "30px",
                backgroundColor:
                  index === foundIndex
                    ? "green"
                    : index === currentIndex
                    ? "orange"
                    : "gray",
                textAlign: "center",
                color: "white",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      {foundIndex !== null && (
        <p className="text-blue-600 font-bold text-xl text-center mt-6">
          Found item at index {foundIndex}
        </p>
      )}
      {notFoundText && (
        <p className="text-red-600 font-bold text-xl text-center mt-6">
          Target not found
        </p>
      )}
    </div>
  );
};

export default LinearSearch;
