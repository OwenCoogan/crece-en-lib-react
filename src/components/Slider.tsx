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
      className="h-56 sm:h-64 xl:h-96 2xl:h-96 mb-24 px-12"
    >
    <h2 className='text-4xl font-extrabold dark:text-white mt-10'>Gallerie d'images</h2>
    <Carousel>
      {post.map((post, index) => (
        <img src={post.image} alt={post.description}
          className="absolute block w-full lg:w-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      ))}
    </Carousel>
    </div>
  )
}
