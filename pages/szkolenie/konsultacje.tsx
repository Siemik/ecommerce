import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                Konsultacje
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Potrzebujesz szybkiej pomocy?
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                Zapisz się na konsultacje ze specjalistą
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
