'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const InputSearch = ({ breeds }: { breeds: any }) => {
  const [search, setSearch] = useState('')
  const [filterBreeds, setFilterBreeds] = useState([])

  useEffect(() => {
    const findBreed = () => {
      const searchBreeds = breeds.filter((breed: any) =>
        breed.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilterBreeds(searchBreeds)
    }
    search && findBreed()
  }, [breeds, search])

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-black text-xs outline-none rounded-3xl p-2 mt-4 w-56 bg-search-image bg-no-repeat bg-right"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
      />
      {search && filterBreeds && (
        <div className="w-full max-w-[224px] max-h-52 bg-white absolute rounded-xl z-10 mt-2 shadow-md overflow-y-auto">
          {filterBreeds.map((breed: any) => (
            <Link href={`cat/${breed.id}`} key={breed.id}>
              <p className="w-full p-2 hover:bg-gray-200 text-xs font-medium">
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
