const PaginationBtn = ({ children, active, changeIndex }) => {
  return (
    <button
      className={`md:border-2 rounded-lg pt-1 pb-2 min-w-20 w-32 transition-all hover:bg-[#021EDD] hover:border-[#021EDD] hover:text-[#FBC52D] 
      ${
        active ? "bg-[#021EDD] border-[#021EDD] text-[#FBC52D]" : "md:border-gray-400 bg-[#F6F6F6] md:bg-transparent"
      }`}
      type="button"
      onClick={changeIndex}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
