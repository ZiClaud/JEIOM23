import React, { useRef, useState } from "react"
import TruncateTextProps from "./index.types"
import { FC } from "react"

const TruncatedText: FC<TruncateTextProps> = ({ text, maxLength }) => {
  const [showMore, setShowMore] = useState(false)

  const targetDivRef = useRef<HTMLDivElement>(null)
  const toggleShowMore = () => {
    setShowMore(!showMore)
    if (showMore) {
      targetDivRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  function sliceStringWithoutTruncatingWords(
    inputString: string,
    start: number,
    end: number
  ): string {
    // Split the input string into words
    const words = inputString.split(" ")

    // Initialize variables to keep track of the current position and the resulting sliced string
    let currentPosition = 0
    let slicedString = ""

    // Iterate through each word
    for (const word of words) {
      // Calculate the length of the word
      const wordLength = word.length

      // Check if adding the word to the sliced string would exceed the 'end' position
      if (currentPosition + wordLength <= end) {
        // Add the word and a space to the sliced string
        slicedString += word + " "

        // Update the current position
        currentPosition += wordLength + 1 // Add 1 for the space
      } else {
        // Break the loop if adding the word would exceed the 'end' position
        break
      }
    }

    // Use slice to remove the trailing space and return the final sliced string
    return slicedString.slice(start, end).trim()
  }

  const truncatedText = showMore
    ? text
    : sliceStringWithoutTruncatingWords(text, 0, maxLength)

  return (
    <div ref={targetDivRef}>
      <div
        dangerouslySetInnerHTML={{
          __html: `${truncatedText}${showMore ? "" : "..."}`,
        }}
        className="antialiased font-normal text-justify text-white text-[15px] tablet:text-[14px] laptop:text-[20px] pb-2 pt-2"
      />
      {text.length > maxLength && (
        <button onClick={toggleShowMore} className="text-white underline">
          {showMore ? "Mostra di meno" : "Mostra di più"}
        </button>
      )}
    </div>
  )
}

export default TruncatedText
