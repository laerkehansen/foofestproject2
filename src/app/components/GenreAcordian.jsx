// import GenreFilter from "./GenreFilter";

// const GenteAcordian = ({ setFilterGenre, bandData }) => {
//   return (
//     <div>
//       <GenreFilter bandData={bandData} setFilterGenre={setFilterGenre} />
//     </div>
//   );
// };

// export default GenteAcordian;
import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
