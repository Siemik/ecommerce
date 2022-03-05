function FooterHero() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Gotów by zwiększyć swoje kompentecje?</span>
          <span className="block bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Poznaj szczegóły naszej oferty
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="#"
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-blue-700 hover:to-sky-700"
          >
            Szkolenia
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sky-800 bg-sky-50 hover:bg-sky-100"
          >
            Oprogramowanie
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterHero
