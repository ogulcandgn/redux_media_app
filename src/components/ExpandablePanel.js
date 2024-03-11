const ExpandablePanel = ({ header, children }) => {
  return (
    <div className="my-2 border rounded flex items-center ">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {header}
      </div>
      <div className="p-2 border-t">{children}</div>
    </div>
  );
};

export default ExpandablePanel;
