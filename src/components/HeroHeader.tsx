import { Carousel } from 'flowbite-react'
import PostCard from '../design-system/PostCard'

const post = {
  title: 'Post 1',
  description: 'Post 1 description',
  image: 'https://flowbite.com/docs/images/blog/image-1.jpg'
}

export default function HeroHeader(){
  return (
    <div
      className="relative bg-white dark:bg-gray-800"
    >
    <Carousel>
      <PostCard {...post} />
    </Carousel>
    </div>
  )
}
