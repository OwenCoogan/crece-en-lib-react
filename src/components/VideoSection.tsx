export default function VideoSection() {
  return (
    <section className="bg-primary-300 dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen">

        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex h-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kczdY7ZAjN4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="m-auto"
          />
        </div>
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none dark:text-white">Nous travaillons pour l’égalité fille garçon</h1>
            <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-black text-primary-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact Us
            </a>
        </div>
    </div>
</section>
  )
}
