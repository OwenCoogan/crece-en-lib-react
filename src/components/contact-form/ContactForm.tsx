import {
  TextInput,
  Label,
  Button,
  Textarea,
} from 'flowbite-react';

export default function ContactForm(
) {
  return (
    <form className="flex flex-col gap-4 max-w-md m-auto" action="https://gmail.us4.list-manage.com/subscribe/post?u=57d1ccb23872ddf058dfa494d&amp;id=af1e89ad52&amp;f_id=005673e9f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" >
    <h1
      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-primary"
    >
      Contact Form
    </h1>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email"
          value="Your email"
        />
      </div>
      <TextInput
        id="email"
        type="email"
        name="EMAIL"
        placeholder="name@creceEnLibertad.com"
        required={true}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="message"
          value="Your message"
        />
      </div>
      <Textarea
        id="message"
        name="MESSAGE"
        required={true}
      />
    </div>
    <Button type="submit"
      style={
        {
          backgroundColor: '#000',
          color: '#ffc933',
        }
      }
    >
      Submit
    </Button>
  </form>
  )
}
