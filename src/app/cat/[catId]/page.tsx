import Image from 'next/image'
import Link from 'next/link'
import SkillCat from './components/SkillCat'

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

  if (!imagesBreed || !aboutBreed)
    return (
      <div className="container mx-auto p-5 min-h-[calc(100vh-224.48px)] flex items-center justify-center flex-col">
        <p className="font-bold text-2xl text-amber-950">
          404 | Breed Not Found
        </p>
        <Link href={'/'} className="font-medium underline">
          Back
        </Link>
      </div>
    )

  return (
    <div className="container p-5 min-h-[calc(100vh-224.48px)] mx-auto">
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
            {aboutBreed.breeds[0].life_span} years
          </p>
          <SkillCat
            nameSkill="Adaptability"
            quantity={aboutBreed.breeds[0].adaptability}
          />
          <SkillCat
            nameSkill="Affection level"
            quantity={aboutBreed.breeds[0].affection_level}
          />
          <SkillCat
            nameSkill="Child Friendly"
            quantity={aboutBreed.breeds[0].child_friendly}
          />
          <SkillCat
            nameSkill="Grooming"
            quantity={aboutBreed.breeds[0].grooming}
          />
          <SkillCat
            nameSkill="Intelligence"
            quantity={aboutBreed.breeds[0].intelligence}
          />
          <SkillCat
            nameSkill="Health issues"
            quantity={aboutBreed.breeds[0].health_issues}
          />
          <SkillCat
            nameSkill="Social needs"
            quantity={aboutBreed.breeds[0].social_needs}
          />
          <SkillCat
            nameSkill="Stranger friendly"
            quantity={aboutBreed.breeds[0].stranger_friendly}
          />
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
