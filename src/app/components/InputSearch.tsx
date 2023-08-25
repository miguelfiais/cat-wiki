'use client'
import Link from 'next/link'
import { useState } from 'react'

interface IBreed {
  id: string
  name: string
}

const InputSearch = ({ breeds }: { breeds: IBreed[] }) => {
  const [search, setSearch] = useState('')

  const filteredBreeds =
    search.length > 0
      ? breeds.filter((breed) =>
          breed.name.toLowerCase().includes(search.toLowerCase())
        )
      : []

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-black text-xs outline-none rounded-3xl p-2 mt-4 w-56 bg-search-image bg-no-repeat bg-right sm:text-sm md:w-[280px] md:text-base lg:mt-6"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
      />
      {search && filteredBreeds && (
        <div className="w-full max-w-[224px] max-h-52 bg-white absolute rounded-xl z-10 mt-2 shadow-md overflow-y-auto  md:max-w-[280px] ">
          {filteredBreeds.map((breed) => (
            <Link href={`cat/${breed.id}`} key={breed.id}>
              <p className="w-full p-2 hover:bg-gray-200 text-xs sm:text-sm md:text-base font-medium">
                {breed.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default InputSearch
