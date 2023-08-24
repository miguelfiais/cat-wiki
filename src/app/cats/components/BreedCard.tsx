import Image from 'next/image'
import Link from 'next/link'

interface IBreed {
  id: string
  name: string
  description: string
}

interface IBreedImage {
  url: string
}

const fetchImageBreed = async (breedId: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}&api_key=${process.env.API_KEY}`
  )
  const json = (await response.json()) as IBreedImage[]
  return json
}

const BreedCard = async ({
  breed,
  index,
}: {
  breed: IBreed
  index: number
}) => {
  const imageBreed = await fetchImageBreed(breed.id)

  return (
    <div className="flex flex-col">
      <Link href={`/cat/${breed.id}`} className="relative h-[150px] w-[150px]">
        <Image
          src={imageBreed?.[0]?.url}
          alt={breed.name}
          fill
          objectFit="cover"
          className="rounded-xl shadow-md hover:-translate-y-2 transition-all cursor-pointer"
        />
      </Link>

      <div>
        <p className="text-xl font-bold text-amber-950 mt-1">
          {index + 1}. {breed.name}
        </p>
        <p className="text-xs mt-2 font-medium">{breed.description}</p>
      </div>
    </div>
  )
}

export default BreedCard
