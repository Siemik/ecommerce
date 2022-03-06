import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { CheckIcon } from "@heroicons/react/outline"

const tiers = [
  {
    name: "Zdalne",
    href: "#",
    priceMonthly: 799,
    description: "Szkolenie przeprowadzone zdalnie przy pomocy Microsoft Teams",
    features: [
      "Do wyboru: Norma PRO, Norma EXPERT lub Rodos",
      "Elastyczny dobór godzin",
      "Uczysz się na własnym sprzęcie",
      "Materiały pomocnicze w PDF",
    ],
  },
  {
    name: "Lokalnie",
    href: "#",
    priceMonthly: 1199,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    features: [
      "Do wyboru: Norma PRO, Norma EXPERT",
      "Szkolenie w Łodzi",
      "Możliwość skorzystania z naszych laptopów",
      "Materiały pomocnicze w papierowej wersji",
    ],
  },
]

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <div className="bg-gray-50">
          <div className="pt-12 sm:pt-16 lg:pt-24">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                <h2 className="text-lg leading-6 font-semibold text-gray-600 uppercase tracking-wider">
                  Cennik
                </h2>
                <p className="text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">
                  Wybierz odpowiedni pakiet dla siebie
                </p>
                <p className="text-xl text-gray-700">
                  Najpopularniejszą opcją są szkolenia zdalne, ze względu na
                  niższą cene, mimo tej samej wartości merytorycznej.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div className="relative">
              <div className="absolute inset-0 h-3/4 bg-gray-50" />
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                        <div>
                          <h3
                            className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                            id="tier-standard"
                          >
                            {tier.name}
                          </h3>
                        </div>
                        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                          {tier.priceMonthly} zł
                        </div>
                        <p className="mt-5 text-lg text-gray-500">
                          {tier.description}
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                        <ul role="list" className="space-y-4">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon
                                  className="h-6 w-6 text-green-500"
                                  aria-hidden="true"
                                />
                              </div>
                              <p className="ml-3 text-base text-gray-700">
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <div className="rounded-md shadow">
                          <a
                            href={tier.href}
                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-900"
                            aria-describedby="tier-standard"
                          >
                            Zapisz się
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
              <div className="max-w-md mx-auto lg:max-w-5xl">
                <div className="rounded-lg bg-blue-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                  <div className="flex-1">
                    <div>
                      <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                        Pakiet łączony
                      </h3>
                    </div>
                    <div className="mt-4 text-lg text-gray-600">
                      Zakup oprogramowanie i uzyskaj{" "}
                      <span className="font-semibold text-gray-600">
                        10% zniżki
                      </span>{" "}
                      na każde szkolenie z naszej oferty.
                    </div>
                  </div>
                  <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50"
                    >
                      Kup Oprogramowanie
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
