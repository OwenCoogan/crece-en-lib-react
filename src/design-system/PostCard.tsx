import { Card } from 'flowbite-react'

type LayoutType = 'row' | 'column'
type PostCardProps = {
  title: string
  description: string
  image: string
  layout?: LayoutType
  children?: React.ReactNode
}

export default function PostCard({
  title,
  description,
  image,
  layout = 'row',
}: PostCardProps) {
  return (
    <div
      className="max-w-xs m-auto content-center sm:max-w-screen-sm"
    >
      <Card imgSrc={image ? image : `https://flowbite.com/docs/images/blog/image-1.jpg`} horizontal={false}>
        <h5 className={`text-2xl font-bold tracking-tight text-gray-900 dark:text-primary max-w-sm
          ${layout === 'row' ? 'flex flex-row' : 'mt-2'}
        `}>
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
  </div>
  )
}
