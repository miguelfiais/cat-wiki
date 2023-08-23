import { HiArrowNarrowRight } from 'react-icons/hi'
import BreedCard from './BreedCard'

const fetchBreeds = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/breeds?limit=4&page=0'
  )
  const json = await response.json()
  return json
}

const MostSearchedBreeds = async () => {
  const cats = await fetchBreeds()

  return (
    <div className="bg-stone-300 p-5 rounded-3xl rounded-t-none">
      <p className="text-amber-950 text-xs font-medium">Most Searched Breeds</p>
      <div className="w-11 h-[2px] bg-amber-950 rounded-full mt-1"></div>
      <div className="flex flex-col gap-2 justify-between">
        <h2 className="mt-4 text-lg font-bold max-w-[185px] text-amber-950">
          66+ Breeds For you to discover
        </h2>
        <a href="" className="text-xs font-semibold flex items-center gap-1">
          SEE MORE <HiArrowNarrowRight color="#451A03" size={16} />
        </a>
      </div>
      <div className="grid grid-cols-2 items-center mt-5 gap-3">
        {cats.map((cat: any) => (
          <BreedCard key={cat.id} breed={cat} />
        ))}
      </div>
    </div>
  )
}

export default MostSearchedBreeds
