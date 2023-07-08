import { StaticImageData } from "next/image"

export default interface MapPopoverProps {
  title: string
  address: string
  addressUrl: string
  description: string
  imageUrl: StaticImageData | string
  isClicked: boolean
  onClick: (id: string) => void
  id: string
}
