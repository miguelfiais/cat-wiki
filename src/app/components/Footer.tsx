import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="container px-5 mt-5 mx-auto">
      <div className="bg-black p-5 rounded-3xl rounded-b-none">
        <Image
          src={'/CatwikiLogoFooter.svg'}
          alt="logo"
          width={100}
          height={33.59}
        />
        <div className="text-white flex items-center mt-5 gap-1">
          <span className="text-lg">© </span>
          <p className="text-xs ">
            created by{' '}
            <a
              href="https://github.com/miguelfiais"
              target="_blank"
              className="font-bold"
            >
              Miguel Fiais{' '}
            </a>
            - devChallenge.io 2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
