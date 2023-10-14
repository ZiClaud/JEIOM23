import React, { FC, useEffect, useState } from "react"
import GalleryImagesProps from "./index.types"
import Image from "next/image"

const GalleryImages: FC<GalleryImagesProps> = ({ arr }) => {

  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setselectedIndex] = useState(null)

  function getImageDim(link: string) {
    return link.slice(0, -3) + "500"
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", updateWindowDimensions)

    updateWindowDimensions()

    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  return <>

    {innerWidth <= 696 && <>
      <div className="flex">
        <div className="w-1/2 mx-2">
          {
            arr.filter((el, index) => {
                if (index > arr.length / 2) return false
                if (selectedIndex !== null && index > selectedIndex) return false
                if (selectedImage !== null) {
                  // @ts-ignore
                  return el.webContentLink !== selectedImage.webContentLink
                }
                return true
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index)
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/2 mx-2">
          {
            arr.filter((el, index) => {
                if (index <= arr.length / 2) return false
                if (selectedIndex !== null && index - arr.length / 2 > selectedIndex) return false
                if (selectedImage !== null) {
                  // @ts-ignore
                  return el.webContentLink !== selectedImage.webContentLink
                }
                return true
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index)
                         
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>

            ))}
        </div>
      </div>
      {selectedImage !== null && <div className="mt-2 mx-2 group mb-2 flex justify-center w-auto">
        <div className="relative">
          <Image className="rounded-2xl w-auto"// @ts-ignore
                 src={getImageDim(selectedImage.thumbnailLink)}
                 alt={"media.name"}
                 width={150}
                 height={0}
          />
          <div className="absolute right-0 top-0">
            <a href={// @ts-ignore
              selectedImage.webContentLink} download>
              <button
                className=" text-white rounded-2xl bg-red-700 px-4 scale-75  invisible group-hover:visible">
                Scarica
              </button>
            </a>
            <button onClick={() => {
              setSelectedImage(null)
              setselectedIndex(null)
            }}
                    className=" text-white rounded-2xl bg-black px-4 scale-75 invisible group-hover:visible">
              Chiudi
            </button>
          </div>
        </div>
      </div>}
      <div className="flex">
        <div className="w-1/2 mx-2">
          {
            arr.filter((el, index) => {
                if (selectedImage === null) return false
                if (index > arr.length / 2) return false
                if (selectedIndex !== null && index <= selectedIndex) return false
                // @ts-ignore
                return el.webContentLink !== selectedImage.webContentLink
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index+ selectedIndex)
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/2 mx-2">
          {
            arr.filter((el, index) => {
                if (selectedImage === null) return false
                if (index <= arr.length / 2) return false
                if (selectedIndex !== null && index - arr.length / 2 <= selectedIndex) return false
                // @ts-ignore
                return el.webContentLink !== selectedImage.webContentLink
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index+ selectedIndex)
                         
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>}

    {innerWidth > 696 && <>
      <div className="flex">
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (index > arr.length / 3) return false
                if (selectedIndex !== null && index+1 > selectedIndex) return false
                if (selectedImage !== null) {
                  // @ts-ignore
                  return el.webContentLink !== selectedImage.webContentLink
                }
                return true
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index)
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (index <= arr.length / 3 || index >= arr.length *2/ 3) return false
                if (selectedIndex !== null && index - arr.length / 3 > selectedIndex) return false
                if (selectedImage !== null) {
                  // @ts-ignore
                  return el.webContentLink !== selectedImage.webContentLink
                }
                return true
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index)
                         
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>

            ))}
        </div>
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (index < arr.length*2 / 3) return false
                if (selectedIndex !== null && index - arr.length*2 / 3 > selectedIndex) return false
                if (selectedImage !== null) {
                  // @ts-ignore
                  return el.webContentLink !== selectedImage.webContentLink
                }
                return true
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index)
                         
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>

            ))}
        </div>
      </div>
      {selectedImage !== null && <div className="mt-2 mx-2 group mb-2 flex justify-center w-auto">
        <div className="relative">
          <Image className="rounded-2xl w-auto"// @ts-ignore
                 src={getImageDim(selectedImage.thumbnailLink)}
                 alt={"media.name"}
                 width={150}
                 height={0}
          />
          <div className="absolute right-0 top-0">
            <a href={// @ts-ignore
              selectedImage.webContentLink} download>
              <button
                className=" text-white rounded-2xl bg-red-700 px-4 scale-75  invisible group-hover:visible">
                Scarica
              </button>
            </a>
            <button onClick={() => {
              setSelectedImage(null)
              setselectedIndex(null)
            }}
                    className=" text-white rounded-2xl bg-black px-4 scale-75 invisible group-hover:visible">
              Chiudi
            </button>
          </div>
        </div>
      </div>}
      <div className="flex">
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (selectedImage === null) return false
                if (index > arr.length / 3) return false
                if (selectedIndex !== null && index <= selectedIndex) return false
                // @ts-ignore
                return el.webContentLink !== selectedImage.webContentLink
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index+ selectedIndex)
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (selectedImage === null) return false
              if (index <= arr.length / 3 || index >= arr.length *2/ 3) return false
                if (selectedIndex !== null && index - arr.length / 3 <= selectedIndex) return false
                // @ts-ignore
                return el.webContentLink !== selectedImage.webContentLink
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index+ selectedIndex)
                         
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
        <div className="w-1/3 mx-2">
          {
            arr.filter((el, index) => {
                if (selectedImage === null) return false
              if (index < arr.length *2/ 3 ) return false
                if (selectedIndex !== null && index - arr.length *2/ 3 <= selectedIndex) return false
                // @ts-ignore
                return el.webContentLink !== selectedImage.webContentLink
              },
            ).map((media, index) => (
              <div className="relative mt-2 group cursor-zoom-in" key={index}>
                <Image className="rounded-2xl w-full"
                       src={getImageDim(media.thumbnailLink)}
                       alt={"image"}
                       width={150}
                       height={0}// @ts-ignore
                       onClick={() => {
                         setSelectedImage(media)
                         // @ts-ignore
                         setselectedIndex(index+ selectedIndex)
                       }}
                />
                <a href={media.webContentLink} download>
                  <button
                    className="absolute text-white rounded-2xl bg-red-700 px-4 scale-75 right-0 top-0 invisible group-hover:visible">
                    Scarica
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>}
  </>
}

export default GalleryImages