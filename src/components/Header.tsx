import { Navbar } from 'flowbite-react'

import logo from '../ressources/image/logo.jpeg';

export default function HeaderCustom(
){
  return (
    <div
    >
    <Navbar
    rounded={true}
    >
    <Navbar.Brand
      href="/"
    >
      <img
        src={logo}
        className="mr-3 w-20"
        alt="Crece En Libertad Logo"
        width="auto"
      />
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        href="/"
        style={{
          color: "#ffc933",
        }}
      >
        Home
      </Navbar.Link>
      <Navbar.Link
        href="/contact"
        style={{
          color: "#ffc933",

        }}
      >
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
</div>
  )
}
