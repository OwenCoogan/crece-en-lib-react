import { Carousel } from 'flowbite-react'
import PostCard from '../design-system/PostCard'

const post = [
  {
    title: 'Post 1',
    description: 'Post 1 description',
    image: 'https://flowbite.com/docs/images/blog/image-1.jpg'
  },
  {
    title: 'Post 2',
    description: 'Post 2 description',
    image: 'https://flowbite.com/docs/images/blog/image-2.jpg'
  },
  {
    title: 'Post 3',
    description: 'Post 3 description',
    image: 'https://flowbite.com/docs/images/blog/image-3.jpg'
  }
]

export default function HeroHeader(){
  return (
    <div
      className="relative bg-primary dark:bg-gray-800"
    >
    <Carousel>
      {post.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          image={post.image}
        /> ))}
    </Carousel>
    </div>
  )
}
