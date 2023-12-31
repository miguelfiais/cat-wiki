import Image from 'next/image'
import Link from 'next/link'

interface IBreed {
  id: string
  name: string
}

interface IBreedImage {
  url: string
}

const fetchBreed = async (breedId: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}&api_key=${process.env.API_KEY}`
  )
  const json = (await response.json()) as IBreedImage[]
  return json
}

const BreedCard = async ({ breed }: { breed: IBreed }) => {
  const cat = await fetchBreed(breed.id)
  if (!cat) return null
  return (
    <Link
      href={`/cat/${breed.id}`}
      className="w-full hover:-translate-y-2 transition-all"
    >
      <div className="relative w-full h-[150px] lg:h-[200px]">
        <Image
          src={cat?.[0]?.url}
          alt={breed.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      <p className="text-xs text-amber-950 font-semibold mt-2 md:text-sm lg:text-base">
        {breed.name}
      </p>
    </Link>
  )
}

export default BreedCard
