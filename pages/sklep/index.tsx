import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import Image from "next/image"

const categories = [
  {
    name: "Norma",
    href: "#",
    imageSrc: "/shop-img.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Rodos",
    href: "#",
    imageSrc: "/shop-img.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Cenniki",
    href: "#",
    imageSrc: "/shop-img.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
]

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <div className="bg-white">
          <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Czego szukasz?
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Posiadamy oprogramowanie oraz cenniki od liderów na rynku
              oprogramowania dla kosztorystanów.
            </p>

            <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="group block"
                >
                  <div
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                  >
                    <Image
                      src={category.imageSrc}
                      alt={category.imageAlt}
                      layout="fill"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
