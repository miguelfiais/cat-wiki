import MostSearchedBreeds from './components/MostSearchedBreeds'
import SearchCat from './components/SearchCat'

export default function Home() {
  return (
    <main className="container p-5">
      <SearchCat />
      <MostSearchedBreeds />
    </main>
  )
}
