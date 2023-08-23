import Image from 'next/image'

const fetchImagesBreed = async (breed: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=${process.env.API_KEY}`
  )
  const json = await response.json()
  return json
}

const fetchAboutBreed = async (breed: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?&breed_ids=${breed}&api_key=${process.env.API_KEY}`
  )
  const json = await response.json()
  return json[0]
}

const Cat = async ({ params }: { params: { catId: string } }) => {
  const imagesBreed = await fetchImagesBreed(params.catId)
  const aboutBreed = await fetchAboutBreed(params.catId)

  return (
    <div className="container p-5 min-h-[calc(100vh-204.48px)] mx-auto">
      <div>
        <Image
          src={aboutBreed.url}
          alt={aboutBreed.breeds[0].name}
          width={250}
          height={250}
          className="rounded-lg mb-5"
        />

        <h2 className="text-3xl font-bold text-amber-950">
          {aboutBreed.breeds[0].name}
        </h2>
        <p className="mt-5 text-xs font-medium">
          {aboutBreed.breeds[0].description}
        </p>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-xs">
            <span className="font-bold">Temperament: </span>
            {aboutBreed.breeds[0].temperament}
          </p>
          <p className="text-xs">
            <span className="font-bold">Origin: </span>
            {aboutBreed.breeds[0].origin}
          </p>
          <p className="text-xs">
            <span className="font-bold">Life Span: </span>
            {aboutBreed.breeds[0].life_span}
          </p>
          <p className="text-xs">
            <span className="font-bold">Adaptability: </span>
            {aboutBreed.breeds[0].adaptability}
          </p>
          <p className="text-xs">
            <span className="font-bold">Affection level: </span>
            {aboutBreed.breeds[0].affection_level}
          </p>
          <p className="text-xs">
            <span className="font-bold">Child Friendly: </span>
            {aboutBreed.breeds[0].child_friendly}
          </p>
          <p className="text-xs">
            <span className="font-bold">Grooming: </span>
            {aboutBreed.breeds[0].grooming}
          </p>
          <p className="text-xs">
            <span className="font-bold">Intelligence: </span>
            {aboutBreed.breeds[0].intelligence}
          </p>
          <p className="text-xs">
            <span className="font-bold">Health issues: </span>
            {aboutBreed.breeds[0].health_issues}
          </p>
          <p className="text-xs">
            <span className="font-bold">Social needs: </span>
            {aboutBreed.breeds[0].social_needs}
          </p>
          <p className="text-xs">
            <span className="font-bold">Stranger friendly: </span>
            {aboutBreed.breeds[0].stranger_friendly}
          </p>
        </div>
      </div>
      <h3 className="text-2xl  font-semibold text-amber-950 mt-8">
        Other photos
      </h3>
      <div className="flex flex-wrap gap-3 mt-5">
        {imagesBreed &&
          imagesBreed.map((breed: any) => (
            <div key={breed.id} className="relative h-[150px] w-[150px]">
              <Image
                src={breed.url}
                alt="Abys"
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Cat
