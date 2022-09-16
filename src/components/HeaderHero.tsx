import holdingHands from '../ressources/image/holding_hands.jpeg';

export default function HeaderHero(){
  return (
    <section className="bg-primary-300 dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Nous travaillons pour l’égalité fille garçon</h1>
            <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-black text-primary-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contactez nous
            </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-auto">
            <img src={holdingHands} alt="mockup" className='w-3/4 m-auto'/>
        </div>
    </div>
</section>
  )
}
