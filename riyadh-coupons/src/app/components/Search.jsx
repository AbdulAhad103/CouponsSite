const Search = ({ setSearch }) => {
  return (
    <input
        className="w-full text-center text-2xl border-[3px] border-[#021EDD] md:border-2 md:border-gray-400 rounded-2xl placeholder:text-black pt-3 pb-4"
        placeholder="أدخل اسم المتجر أو المحل"
        type="text"
        onChange={e => setSearch(e.target.value)}
    />
  )
}

export default Search
