import { IoChevronDown } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";

import { useState } from "react";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="my-2 border rounded ">
      <div className="flex p-4 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick}>
          {expanded ? <IoChevronDown /> : <IoChevronBackSharp />}
        </div>
      </div>
      <div>{expanded && <div className="p-4 border-t">{children}</div>}</div>
    </div>
  );
}

export default ExpandablePanel;
