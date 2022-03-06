import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children, VFC } from "react"

interface Props {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
  activeClassName?: string | undefined
  href: string
}

const NavLink: VFC<Props> = ({
  children,
  className,
  activeClassName,
  ...props
}) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  // const childClassName = child.props.className || ""

  const classes =
    asPath === props.href ? `${className} ${activeClassName}` : className

  return (
    <Link {...props} passHref>
      {React.cloneElement(child, {
        className: classes || null,
      })}
    </Link>
  )
}

export default NavLink
