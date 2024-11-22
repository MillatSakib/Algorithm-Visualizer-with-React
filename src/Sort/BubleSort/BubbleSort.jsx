import { useState } from "react";

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [currentComparing, setCurrentComparing] = useState([]);
  const [swappingIndices, setSwappingIndices] = useState([]);
  const [speed, setSpeed] = useState("");
  const [elementsCount, setElementsCount] = useState("");
  const [isGenerateEnabled, setIsGenerateEnabled] = useState(false);
  const [isSortingNow, setIsSortingNow] = useState(false);

  const speedMap = {
    Slow: 1500,
    Medium: 800,
    Fast: 400,
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
    let j = 0;

    const bubbleSortStep = () => {
      if (i >= arr.length - 1) {
        setIsSortingNow(false);
        setIsGenerateEnabled(true);
        return;
      }

      if (j < arr.length - i - 1) {
        setCurrentComparing([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          setSwappingIndices([j, j + 1]);
          setTimeout(() => {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setArray([...arr]);
            setTimeout(() => setSwappingIndices([]), speedMap[speed] / 2);
            j++;
            bubbleSortStep();
          }, speedMap[speed]);
        } else {
          j++;
          bubbleSortStep();
        }
      } else {
        i++;
        j = 0;
        bubbleSortStep();
      }
    };

    bubbleSortStep();
  };

  const resetSort = () => {
    setCurrentComparing([]);
    setSwappingIndices([]);
    setIsGenerateEnabled(!!elementsCount);
  };

  return (
    <div>
      <h2 className="text-center mb-10 font-bold text-2xl text-blue-500">
        Bubble Sort Visualizer
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
                backgroundColor: swappingIndices.includes(index)
                  ? "purple"
                  : currentComparing.includes(index)
                  ? "blue"
                  : "red",
                textAlign: "center",
                color: "white",
                transition: `height ${
                  speedMap[speed] / 2
                }ms ease-in-out, background-color ${
                  speedMap[speed] / 2
                }ms ease-in-out`,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
