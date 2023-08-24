import BreedCard from './components/BreedCard'

const fetchBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds')
  const json = response.json()
  return json
}

const Cats = async () => {
  const breeds = await fetchBreeds()
  if (!breeds) return null
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-amber-950 text-3xl font-bold">
        Breeds For you to discover
      </h1>
      <div className="flex flex-col gap-9 mt-9">
        {breeds.map((breed: any, index: number) => (
          <BreedCard key={breed.id} breed={breed} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Cats
