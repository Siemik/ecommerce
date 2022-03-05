import Image from "next/image"
import Logo from "../public/PGE-logo.svg"

const metrics = [
  {
    id: 1,
    source: Logo,
    alt: "tekst alternatywny",
  },
  {
    id: 2,
    source: Logo,
    alt: "tekst alternatywny",
  },
  {
    id: 3,
    source: Logo,
    alt: "tekst alternatywny",
  },
  {
    id: 4,
    source: Logo,
    alt: "tekst alternatywny",
  },
  {
    id: 5,
    source: Logo,
    alt: "tekst alternatywny",
  },
]

function SocialProof() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Szkoliliśmy oraz dostarczaliśmy wsparcie dla najlepszych
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {metrics.map((item) => (
            <div
              key={item.id}
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
            >
              <Image
                className="h-12 grayscale"
                src={item.source}
                alt={item.alt}
                layout="fixed"
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialProof
