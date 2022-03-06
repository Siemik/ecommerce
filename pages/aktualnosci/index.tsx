import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const posts = [
  {
    title: "Jak wybrać szkolenie?",
    href: "#",
    category: {
      name: "Poradnik",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Jak wybrać odpowiednie szkolenie dla swoich potrzeb? Czy szkolenie zdalne będzie dla mnie odpowiednie? Który poziom szkolenia odpowiada moim umiejętnością?",
    date: "16 marca 2022",
    datetime: "2022-03-16",
    readingTime: "6 min",
  },
  {
    title: "Aktualizacja Norma EXPERT 14.2",
    href: "#",
    category: {
      name: "Aktualizacja",
      href: "#",
      color: "bg-sky-100 text-sky-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "10 marca 2022",
    datetime: "2022-03-10",
    readingTime: "4 min",
  },
  {
    title: "Dlaczego rozpoczeliśmy sprzedaż programu Rodos",
    href: "#",
    category: {
      name: "Opinia",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Przez wiele lat nie umieszczaliśmy w naszej ofercie oprogramowania Rodos. Jednak rozwój tego programu sprawił że nie mogliśmy go dłużej ignorować.",
    date: "2 lutego 2022",
    datetime: "2022-02-12",
    readingTime: "11 min",
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Ostatnie publikacje
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Przeczytaj o aktualnościach w środowisku kosztorysanckim.
                Najnowsze nowinki ze świata edukacji oraz techniczne zmiany w
                oprogramowaniu
              </p>
            </div>
            <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {posts.map((post) => (
                <div key={post.title}>
                  <div>
                    <a href={post.category.href} className="inline-block">
                      <span
                        className={classNames(
                          post.category.color,
                          "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                        )}
                      >
                        {post.category.name}
                      </span>
                    </a>
                  </div>
                  <a href={post.href} className="block mt-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} czytania</span>
                      </div>
                    </div>
                  </div>
                </div>
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
