import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

const WhyShould = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="w-14 h-1 bg-amber-950 rounded-full"></div>
        <h2 className="mt-4 text-amber-950 text-4xl font-bold">
          Why should you have a cat?
        </h2>
        <p className="mt-10 text-lg text-amber-950 font-medium">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a
          href="https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/"
          className="text-xs font-bold flex items-center gap-1 text-stone-500 mt-5"
          target="_blank"
        >
          READ MORE <HiArrowNarrowRight color="#78716C" size={16} />
        </a>
      </div>
      <div className="flex items-start gap-4 mt-14">
        <div className="flex flex-col items-end gap-4">
          <Image src={'/image2.png'} alt="" width={173} height={105} />
          <Image src={'/image1.png'} alt="" width={123} height={184} />
        </div>
        <Image src={'/image3.png'} alt="" width={150} height={242} />
      </div>
    </div>
  )
}

export default WhyShould
