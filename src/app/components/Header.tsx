import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container p-5">
      <Link href={'/'}>
        <Image src="/CatwikiLogo.svg" alt="logo" width={127.71} height={42.9} />
      </Link>
    </div>
  )
}

export default Header
