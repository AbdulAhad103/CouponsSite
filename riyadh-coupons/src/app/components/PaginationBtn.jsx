const PaginationBtn = ({ children, active, changeIndex }) => {
  return (
    <button
      className={`border-2 rounded-lg pt-1 pb-2 w-32 transition-all 
      ${
        active ? "bg-[#021EDD] border-[#021EDD] text-[#FBC52D]" : "border-gray-400"
      }`}
      onClick={changeIndex}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
