import Link from "next/link"
import NavLink from "./NavLink"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"

const solutions = [
  {
    name: "Szkolenia",
    description:
      "Kilkudniowe szkolenie z wybranego oprogramowania. Najpopularniejsza opcja.",
    href: "/szkolenie",
    icon: InboxIcon,
  },
  {
    name: "Konsultacje",
    description: "Kilku godzinne konsultacje online.",
    href: "/szkolenie/konsultacje",
    icon: AnnotationIcon,
  },
  {
    name: "Zamknietę",
    description: "Dla klientów korporacyjnych",
    href: "/szkolenie/grupyzamkniete",
    icon: ChatAlt2Icon,
  },
  {
    name: "e-Learning",
    description: "Kurs wideo. Ekonomiczna opcja dla samouków.",
    href: "/szkolenie/e-learning",
    icon: QuestionMarkCircleIcon,
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

function Navigation() {
  return (
    <header>
      <Popover className="relative bg-gray-100">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" passHref>
              <a className="text-2xl font-bold">
                Partner<span className="text-sky-600">Soft.pl</span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-gray-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    )}
                  >
                    <span>Szkolenie</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 text-gray-600 hover:text-black"
                              activeClassName="bg-gray-50 text-black"
                            >
                              <a>
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-sky-600 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <NavLink
              href="/aktualnosci"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900 hover:text-gray-900"
            >
              <a>Aktualności</a>
            </NavLink>
            <NavLink
              href="/sklep"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900 hover:text-gray-900"
            >
              <a>Oprogramowanie</a>
            </NavLink>

            <NavLink
              href="/kontakt"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-900 hover:text-gray-900"
            >
              <a>Kontakt</a>
            </NavLink>
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" passHref>
                      <a className="text-2xl font-bold">
                        Partner<span className="text-sky-600">Soft.pl</span>
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 text-gray-600 hover:text-black"
                        activeClassName="bg-gray-50 text-black"
                      >
                        <a>
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium">
                            {item.name}
                          </div>
                        </a>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <NavLink
                    href="/sklep"
                    className="text-base font-medium text-gray-700 hover:text-gray-900"
                    activeClassName="text-black hover:text-black"
                  >
                    <a>Oprogramowanie</a>
                  </NavLink>
                  <NavLink
                    href="/aktualnosci"
                    className="text-base font-medium text-gray-700 hover:text-gray-900"
                    activeClassName="text-black hover:text-black"
                  >
                    <a>Aktualności</a>
                  </NavLink>
                  <NavLink
                    href="/kontakt"
                    className="text-base font-medium text-gray-700 hover:text-gray-900"
                    activeClassName="text-black hover:text-black"
                  >
                    <a>Kontakt</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Navigation
