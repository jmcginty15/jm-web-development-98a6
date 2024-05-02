import { useState, useRef } from "react";
import ProcessItem from "./processItem";
import { processItems } from "~/config";
import { ProcessItemProps } from "./processItem";

export default function ProcessTabLayout({
  scrollToForm,
}: {
  scrollToForm?: Function;
}) {
  const photoRef = useRef<HTMLDivElement>(null);

  const [columnsSet, setColumnsSet] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<ProcessItemProps>(
    processItems[0]
  );
  const [columnsWide, setColumnsWide] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(1000);

  const setColumns = () => {
    if (window.innerWidth <= 768 && columnsWide) setColumnsWide(false);
    else if (window.innerWidth > 768 && !columnsWide) setColumnsWide(true);
    setWindowWidth(window.innerWidth);
  };

  if (!columnsSet && typeof window !== "undefined") {
    setTimeout(() => {
      setColumns();
      setColumnsSet(true);
    }, 1);
  }

  const advanceItem = () => {
    if (activeIndex === processItems.length - 1) scrollToForm!();
    else {
      setActiveIndex(activeIndex + 1);
      setActiveItem(processItems[activeIndex + 1]);
      photoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("resize", setColumns);

  return (
    <div className="ProcessTabLayout">
      {columnsWide ? (
        <ProcessTabsWide
          activeItem={activeItem}
          windowWidth={windowWidth}
          setActiveItem={setActiveItem}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <ProcessTabsNarrow
          activeItem={activeItem}
          activeIndex={activeIndex}
          setActiveItem={setActiveItem}
          setActiveIndex={setActiveIndex}
        />
      )}
      <ProcessItem
        title={activeItem.title}
        photo={activeItem.photo}
        photoAlt={activeItem.photoAlt}
        description={activeItem.description}
        advanceItem={advanceItem}
        next={activeIndex < processItems.length - 1}
        photoRef={photoRef}
      />
    </div>
  );
}

function ProcessTabsWide({
  activeItem,
  windowWidth,
  setActiveItem,
  setActiveIndex,
}: any) {
  return (
    <div className="ProcessTabLayout-tabs">
      {processItems.map((item, index) => (
        <div
          className={`ProcessTabLayout-button ProcessTabLayout-button-${
            index === 0
              ? "left"
              : index === processItems.length - 1
              ? "right"
              : "center"
          }`}
          id={`${
            activeItem.title === item.title
              ? "ProcessTabLayout-button-active"
              : `ProcessTabLayout-button-${index}`
          }`}
          key={item.title}
          onClick={() => {
            setActiveItem(processItems[index]);
            setActiveIndex(index);
          }}
        >
          <span className="ProcessTabLayout-button-inner">
            <span className="ProcessTabLayout-indexNumber">
              {`0${index + 1}`}.
            </span>
            {windowWidth <= 985 ? <br /> : " "}
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProcessTabsNarrow({
  activeItem,
  activeIndex,
  setActiveItem,
  setActiveIndex,
}: any) {
  const stylesArray = new Array(5).fill("calc((100% * (2 / 3)) / 4)");
  stylesArray[activeIndex] = "calc(100% / 3)";

  return (
    <div
      className="ProcessTabLayout-tabs"
      style={{ gridTemplateColumns: stylesArray.join(" ") }}
    >
      {processItems.map((item, index) => (
        <div
          className={`ProcessTabLayout-button ProcessTabLayout-button-${
            index === 0
              ? "left"
              : index === processItems.length - 1
              ? "right"
              : "center"
          }`}
          id={`${
            activeItem.title === item.title
              ? "ProcessTabLayout-button-active"
              : `ProcessTabLayout-button-${index}`
          }`}
          key={item.title}
          onClick={() => {
            setActiveItem(processItems[index]);
            setActiveIndex(index);
          }}
        >
          <span className="ProcessTabLayout-button-inner">
            <span className="ProcessTabLayout-indexNumber">
              {`0${index + 1}`}.
            </span>
            <br />
            {index === activeIndex && item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
