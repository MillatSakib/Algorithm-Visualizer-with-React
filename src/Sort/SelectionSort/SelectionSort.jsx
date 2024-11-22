import { useState } from "react";

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [currentComparing, setCurrentComparing] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [previousSortedPosition, setPreviousSortedPosition] = useState(-1); // Lagging yellow highlight
  const [speed, setSpeed] = useState("");
  const [elementsCount, setElementsCount] = useState("");
  const [isGenerateEnabled, setIsGenerateEnabled] = useState(false);
  const [isSortingNow, setIsSortingNow] = useState(false);

  const speedMap = {
    Slow: 1000,
    Medium: 500,
    Fast: 200,
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
    resetSort();
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
  };

  const handleGenerateArray = () => {
    const newArray = Array.from(
      { length: parseInt(elementsCount) },
      () => Math.floor(Math.random() * 30) + 4
    );
    setArray(newArray);
  };

  const handleSort = () => {
    setIsSortingNow(true);
    setIsGenerateEnabled(false);

    let arr = [...array];
    let i = 0;

    const selectionSortStep = () => {
      if (i >= arr.length - 1) {
        // Sorting complete
        setSwappingIndices([]);
        setCurrentComparing([]);
        setPreviousSortedPosition(i); // Finalize the yellow on last position
        setIsSortingNow(false);
        setIsGenerateEnabled(true);
        return;
      }

      let minIndex = i;
      let j = i + 1;

      const findMin = () => {
        if (j < arr.length) {
          setCurrentComparing([minIndex, j]);
          if (arr[j] < arr[minIndex]) minIndex = j;
          j++;
          setTimeout(findMin, speedMap[speed] / 2);
        } else {
          if (minIndex !== i) {
            setSwappingIndices([i, minIndex]); // Highlight swapping elements
            setTimeout(() => {
              [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
              setArray([...arr]);
              setSwappingIndices([]); // Reset swapping highlight
              setPreviousSortedPosition(i); // Update lagging yellow highlight
              i++;
              selectionSortStep();
            }, speedMap[speed] / 2);
          } else {
            setPreviousSortedPosition(i); // Update lagging yellow highlight
            i++;
            selectionSortStep();
          }
        }
      };

      findMin();
    };

    selectionSortStep();
  };

  const resetSort = () => {
    setCurrentComparing([]);
    setSwappingIndices([]);
    setPreviousSortedPosition(-1);
    setIsGenerateEnabled(!!elementsCount);
  };

  return (
    <div>
      <h2 className="text-center mb-10 font-bold text-2xl text-blue-500">
        Selection Sort Visualizer
      </h2>
      <div className="flex gap-2 justify-center flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>Speed</div>
          <select
            className="select w-full max-w-48"
            value={speed}
            onChange={handleSpeedChange}
            disabled={isSortingNow}
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
            disabled={isSortingNow}
          >
            <option disabled value="">
              Select your choice.
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
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
            onClick={handleSort}
            disabled={array.length === 0 || isSortingNow || !speed}
          >
            Start Sort
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
                  index === previousSortedPosition
                    ? "orange"
                    : swappingIndices.includes(index)
                    ? "blue"
                    : currentComparing.includes(index)
                    ? "red"
                    : "gray",
                textAlign: "center",
                color: "white",
                transition: swappingIndices.includes(index)
                  ? `height ${speedMap[speed] / 2}ms ease-in-out`
                  : undefined,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          array.length
            ? "flex gap-2 items-center justify-center my-4 flex-col"
            : "hidden"
        }
      >
        <div className="flex items-center gap-2">
          <span className="font-bold">Default: </span>
          <div className="h-4 w-4 bg-gray-400"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Last Swapped Element: </span>
          <div className="h-4 w-4 bg-yellow-500"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Swapping Elements: </span>
          <div className="h-4 w-4 bg-blue-500"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Comparing Elements: </span>
          <div className="h-4 w-4 bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;
