import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children, FC } from "react"

interface Props {
  children: any
  href: string
}

const NavLink: FC<Props> = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)

  const className =
    asPath === props.href
      ? `text-base font-medium text-gray-900 hover:text-gray-700`
      : `text-base font-medium text-gray-500 hover:text-gray-900`

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default NavLink
