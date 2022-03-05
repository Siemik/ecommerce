import Image from "next/image"
import HeroBg from "../public/hero-bg.jpg"

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src={HeroBg}
              alt="People working on laptops"
              layout="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-sky-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">
                Rozwiń swoje umiejętności
              </span>
              <span className="block text-sky-200">kosztorystanta</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-sky-200 sm:max-w-3xl">
              Zostań produktywnym kosztorystanem/tką. Poruszaj się sprawnie po
              programie, stosuj najlepsze praktyki. Zoszczędź czas oraz unikaj
              potencjalnych błędów, które mogą kosztować{" "}
              <strong>setki tysięcy</strong> złotych
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sky-700 bg-white hover:bg-sky-50 sm:px-8"
                >
                  Zobacz Szkolenia
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Kup Oprogramowanie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
