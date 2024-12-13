import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion px-20 pb-10">
      <div
        className="accordion-header flex gap-2 border-2 border-black font-Inter text-xl font-semibold p-2 w-fit"
        onClick={toggleAccordion}
      >
        <h2 className="">Filter</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
