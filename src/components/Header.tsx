import { Navbar } from 'flowbite-react'

export default function HeaderCustom(
){
  return (
    <div
    >
    <Navbar
  rounded={true}
  style={{
  backgroundColor: "#f8d860",
  }}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Crece En Libertad Logo"
    />
    <span className="self-center primaryspace-nowrap text-xl font-semibold text-dark dark:text-primary">
      Crece En Libertad
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
      style={{
        color: "#000000",
      }}
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      href="/contact"
      style={{
        color: "#000000",
      }}
    >
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}
