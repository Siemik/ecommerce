import Image from "next/image"
import HeroBg from "../public/hero-bg.jpg"

const metrics = [
  {
    id: 1,
    stat: "98%",
    emphasis: "Zadowolonych klientów",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "87%",
    emphasis: "Zadowolonych klientów",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "88%",
    emphasis: "Zadowolonych klientów",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "92%",
    emphasis: "Zadowolonych klientów",
    rest: "lacus nibh integer quis.",
  },
]

function SurveyResults() {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src={HeroBg}
              alt="People working on laptops"
              layout="fill"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
              Valuable Metrics
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Dane z naszych ankiet
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Regularnie moniturujemy zadowolenie naszych klientów. Jesteśmy dumni
            z danych które zbieramy. Jednak nie osiadamy na laurach i codziennie
            zastanawiamy sie jak możemy polepszyć nasze usługi
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurveyResults
