import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { ExclamationIcon } from "@heroicons/react/solid"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Ważna informacja
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Nasz kurs e-lerningowy nie jest substytutem klasycznego
                  szkolenia. Mimo że znajduje się na nim podobny plan nauczania,
                  nie zawiera on zadań oraz możliwości interakcji z trenerem,
                  które nadają największą wartość naszym produktom.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                e-Learning
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Jesteś samoukiem?
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                Z naszym kursem wideo możesz poznać podstawy wybranego
                oprogramowania. Polecamy tą opcję ludziom z ograniczonym
                budżetem, którzy chcą uczyć sie w wybranych przez siebie
                godzinach.
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
