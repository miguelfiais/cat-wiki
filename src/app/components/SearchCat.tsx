import Image from 'next/image'
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
    <div className="p-5 bg-hero-image-sm bg-center bg-no-repeat bg-cover rounded-3xl rounded-b-none relative md:bg-hero-image-md lg:bg-hero-image-lg sm:py-7 lg:px-8 lg:py-12 xl:py-16 xl:px-10">
      <Image
        src={'/CatwikiLogoFooter.svg'}
        alt="logo"
        width={128}
        height={43}
        className="w-1/4 min-w-min"
      />
      <p className="text-white text-xs max-w-[170px] font-medium mt-2 sm:text-sm sm:max-w-[220px] md:text-base md:max-w-[260px] lg:text-lg lg:max-w-[280px] lg:mt-4 xl:text-2xl xl:max-w-[360px]">
        Get to know more about your cat breed
      </p>
      <InputSearch breeds={breeds} />
    </div>
  )
}

export default SearchCat
