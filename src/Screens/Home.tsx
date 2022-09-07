import HeroHeader from '../components/HeroHeader';

export default function Home(){
  return (
    <div>
      <h1>Home</h1>
      <HeroHeader/>
      <iframe className="mt-20 inset-0 w-1/2 h-full mx-auto" src="https://www.youtube.com/watch?v=kczdY7ZAjN4" title="Video"/>
    </div>
  )
}
