import { Card } from 'flowbite-react'


export default function PostCard(
  post:{
    title: string,
    description: string,
    image: string
  }
) {
  return (
    <div
      className="max-w-lg m-auto content-center"
    >
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" horizontal={false}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-sm">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.description}
        </p>
      </Card>
  </div>
  )
}
