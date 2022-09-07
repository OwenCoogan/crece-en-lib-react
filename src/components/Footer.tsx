import { Footer } from 'flowbite-react'

export default function FooterCustom(){
  return (
    <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Crece en Libertatd"
    year={2022}
  />
  <Footer.LinkGroup>
    <Footer.Link href="/about">
      About
    </Footer.Link>
    <Footer.Link href="/CGU">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="/contact">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
  )
}
