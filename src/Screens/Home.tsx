import HeaderHero from '../components/HeaderHero';
import Slider from '../components/Slider';
import VideoSection from '../components/VideoSection';

export default function Home(){
  return (
    <div
      className="relative bg-primary-100 dark:bg-gray-800 h-full"
    >
      <HeaderHero/>
      <Slider/>
      <VideoSection/>
    </div>
  )
}
