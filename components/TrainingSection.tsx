import Image from "next/image"
import InboxImage from "../public/inbox-app-screenshot-1.jpg"
import InboxImage2 from "../public/public/inbox-app-screenshot-2.jpg"
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline"

function TrainingSection() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-600">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Szkolenia
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Mamy za sobą ponad 20 lat doświadczenia w szkolenia z
                  oprogramowania do budownictwa. Pomogliśmy w rozwoju ponad
                  tysiącą kosztorysantą. Szkolimy w całej polsce, jednak obecnei
                  skupiamy się na <strong>zdalnych</strong> szkoleniach.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-gradient-to-r from-blue-600 to-sky-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-sky-700"
                  >
                    Dopasuj szkolenie
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Jestem bardzo zadowolona ze szkoleń Pani Małogsi.
                    Widzę że popełniamy mniej błędów, które były zbyt drogie dla
                    mojego biznesu.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="h-6 w-6 rounded-full"
                        src={
                          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Justyna Kowalska, Preses Biura Projektowego Kowalscy Sp. z
                      o.o.
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={
                  "https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                }
                alt="Mapa szkoleń które przeprowadziliśmy w całej Polsce"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Dobierz odpowiedni pakiet oprogramowania
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Pomożemy Ci wybrać najlepsze oprogramowanie pod twoje
                  potrzeby. W naszej ofercie znajdziesz sprawdzone i
                  najpopularniejsze oprogramowania na rynku kosztorysowania.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-gradient-to-r from-blue-600 to-sky-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-sky-700"
                  >
                    Zobacz Produkty
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingSection
