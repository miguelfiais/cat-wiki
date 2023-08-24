import InputSearch from './InputSearch'

interface IBreed {
  id: string
  name: string
}

const fetchBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds')
  const json = (await response.json()) as IBreed[]
  return json
}

const SearchCat = async () => {
  const breeds = await fetchBreeds()
  return (
    <div className="p-5 bg-hero-image-sm bg-center bg-no-repeat bg-cover rounded-3xl rounded-b-none relative">
      <h1 className="text-white text-sm">CatWiki</h1>
      <p className="text-white text-xs max-w-[170px] font-medium mt-2">
        Get to know more about your cat breed
      </p>
      <InputSearch breeds={breeds} />
    </div>
  )
}

export default SearchCat
