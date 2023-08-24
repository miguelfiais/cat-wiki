import BreedCard from './components/BreedCard'

interface IBreed {
  id: string
  name: string
  description: string
}

const fetchBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds')
  const json = (await response.json()) as IBreed[]
  return json
}

const Cats = async () => {
  const breeds = await fetchBreeds()

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-amber-950 text-3xl lg:text-4xl font-bold">
        Breeds For you to discover
      </h1>
      <div className="flex flex-col gap-9 mt-9">
        {breeds &&
          breeds.map((breed, index: number) => (
            <BreedCard key={breed.id} breed={breed} index={index} />
          ))}
      </div>
    </div>
  )
}

export default Cats
