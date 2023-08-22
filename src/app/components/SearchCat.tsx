const SearchCat = () => {
  return (
    <div className="p-5 bg-hero-image-sm bg-center bg-no-repeat bg-cover rounded-3xl rounded-b-none ">
      <h1 className="text-white text-sm">CatWiki</h1>
      <p className="text-white text-xs max-w-[170px] font-medium mt-2">
        Get to know more about your cat breed
      </p>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-black text-xs outline-none rounded-full p-2 mt-4"
      />
    </div>
  )
}

export default SearchCat
