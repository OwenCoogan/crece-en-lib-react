import { Carousel } from 'flowbite-react'
import PostCard from '../design-system/PostCard'
import banner from '../ressources/image/banner.jpeg';
import drawing from '../ressources/image/drawing.jpeg';
import holdingHands from '../ressources/image/holding_hands.jpeg';


const post = [
  {
    title: 'Post 1',
    description: 'Post 1 description',
    image: banner,
  },
  {
    title: 'Post 2',
    description: 'Post 2 description',
    image: drawing,
  },
  {
    title: 'Post 3',
    description: 'Post 3 description',
    image: holdingHands
  }
]

export default function HeroHeader(){
  return (
    <div
      className="grid max-w-screen-xl px-4 py-8 h-screen m-w-full m-auto"
    >
    <h2 className='text-4xl font-extrabold dark:text-white'>Nos News</h2>
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
