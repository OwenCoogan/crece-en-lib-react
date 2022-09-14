import { Badge } from 'flowbite-react'

export default function TextBadge(
  text: string,
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary',
){
  return (
    <Badge
    color={variant}
    >
      {text}
    </Badge>
  )
}
