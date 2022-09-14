import {
  TextInput,
  Label,
  Button,
  Textarea,
} from 'flowbite-react';

export default function ContactForm(
) {
  return (
    <form className="flex flex-col gap-4 max-w-md m-auto">
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
        required={true}
      />
    </div>
    <Button type="submit">
      Submit
    </Button>
  </form>
  )
}
