import HeroHeader from '../components/HeroHeader';

export default function Home(){
  return (
    <div
      className="relative bg-primary-100 dark:bg-gray-800 h-screen"
    >
      <HeroHeader/>
      <div
        className="container mx-auto flex flex-row"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kczdY7ZAjN4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="m-auto my-6"
        />
      </div>
    </div>
  )
}
