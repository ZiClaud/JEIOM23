import { StaticImageData } from "next/image"

export default interface MapCardProps {
  title: string
  address: string
  description: string
  addressUrl: string
  imageUrl: string | StaticImageData
}
