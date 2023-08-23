import MostSearchedBreeds from './components/MostSearchedBreeds'
import SearchCat from './components/SearchCat'
import WhyShould from './components/WhyShould'

export default function Home() {
  return (
    <main className="container p-5">
      <SearchCat />
      <MostSearchedBreeds />
      <WhyShould />
    </main>
  )
}
