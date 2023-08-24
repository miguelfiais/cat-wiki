import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import BreedCard from './BreedCard'

interface IBreed {
  id: string
  name: string
}

const fetchBreeds = async () => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/breeds?limit=4&page=0'
  )
  const json = (await response.json()) as IBreed[]
  return json
}

const MostSearchedBreeds = async () => {
  const cats = await fetchBreeds()

  return (
    <div className="bg-stone-300 p-5 rounded-3xl rounded-t-none">
      <p className="text-amber-950 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
        Most Searched Breeds
      </p>
      <div className="w-11 h-[2px] md:h-[3px] lg:h-1 bg-amber-950 rounded-full mt-1"></div>
      <div className="flex flex-col gap-2 justify-between md:flex-row md:items-end md:mb-8">
        <h2 className="mt-4 text-lg md:text-xl md:max-w-[210px] md:mt-6 lg:text-2xl lg:max-w-[250px] font-bold max-w-[185px] text-amber-950">
          66+ Breeds For you to discover
        </h2>
        <Link
          href="/cats"
          className="text-xs md:text-sm lg:text-base font-semibold flex items-center gap-1"
        >
          SEE MORE{' '}
          <HiArrowNarrowRight
            color="#451A03"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 items-center mt-5 gap-3 lg:grid-cols-4 lg:gap-5">
        {cats.map((cat) => (
          <BreedCard key={cat.id} breed={cat} />
        ))}
      </div>
    </div>
  )
}

export default MostSearchedBreeds
