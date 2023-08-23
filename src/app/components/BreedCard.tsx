import Image from 'next/image'

const fetchBreed = async (breedId: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}&api_key=${process.env.API_KEY}`
  )
  const json = await response.json()
  return json
}

const BreedCard = async ({ breed }: { breed: any }) => {
  const cat = await fetchBreed(breed.id)
  if (!cat) return null
  return (
    <div className="w-full cursor-pointer ">
      <div className="relative w-full h-[150px]">
        <Image
          src={cat[0].url}
          alt={breed.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg hover:-translate-y-2 transition-all"
        />
      </div>

      <p className="text-xs text-amber-950 font-semibold mt-2">{breed.name}</p>
    </div>
  )
}

export default BreedCard
