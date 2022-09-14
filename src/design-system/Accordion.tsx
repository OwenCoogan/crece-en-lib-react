import { Accordion } from 'flowbite-react'
export default function AccordionCustom(
  title: any,
  content: any,
){
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>
          {title}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            {content}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    )


}
