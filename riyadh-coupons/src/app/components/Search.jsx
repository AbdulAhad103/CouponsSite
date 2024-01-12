const Search = ({ setSearch }) => {
  return (
    <input
        className="w-full text-center text-2xl border-2 border-gray-400 rounded-2xl placeholder:text-black pt-3 pb-4"
        placeholder="أدخل اسم المتجر أو المحل"
        onChange={e => setSearch(e.target.value)}
    />
  )
}

export default Search
