import React from "react"
import GallerySectionProps from "./index.types"
import axios from "axios"
import GalleryImages from "@molecules/GalleryImages"

class GallerySection extends React.Component<GallerySectionProps> {

  state = {
    value: "13",
    data: [],
    loading: true,
    selectedImage: null,
  }

  handleRadioButton(value: string) {

    this.setState({
      value: value,
    })
  }

  handleImageClick(value: number | null) {

    this.setState({
      selectedImage: value,
    })
    console.log(this.state.selectedImage)
  }


  render() {
    if (this.state.data.length === 0) {
      axios.get(
        "https://images_api.jeiom23.workers.dev/ ")
        .then(response => {
          this.setState({
            data: response.data,
            loading: false,
          })
        })
        .catch(error => {
          console.error("Errore nella richiesta GET:", error)
        })
    }

    let arr13 = this.state.data[0]
    let arr14 = this.state.data[1]
    let arr15 = this.state.data[2]

    return <>


      <div className="w-full flex flex-row justify-evenly mt-20 tablet:mt-28">
        <div className="flex items-center">
          <input id="default-radio-1" type="radio" value="13" name="default-radio"
                 onChange={() => this.handleRadioButton("13")} checked={this.state.value === "13"}
                 className="hidden peer w-4 h-4" />
          <label htmlFor="default-radio-1"
                 className="text-white flex items-center justify-center w-24 h-12 tablet:w-40 laptop:w-52 laptop:h-16 bg-black-jeiom rounded-full border-2 border-white peer-checked:bg-white peer-checked:text-black">
            <p className="tablet:scale-150"><strong>13</strong> VEN</p>
          </label>
        </div>
        <div className="flex items-center">
          <input id="default-radio-2" type="radio" value="14" name="default-radio"
                 onChange={() => this.handleRadioButton("14")} checked={this.state.value === "14"}
                 className="hidden peer" />

          <label htmlFor="default-radio-2"
                 className="text-white flex items-center justify-center w-24 h-12 tablet:w-40 laptop:w-52 laptop:h-16 bg-black-jeiom rounded-full border-2 border-white peer-checked:bg-white peer-checked:text-black">
            <p className="tablet:scale-150"><strong>14</strong> SAB</p>
          </label>
        </div>

        <div className="flex items-center">
          <input id="default-radio-3" type="radio" value="15" name="default-radio"
                 onChange={() => this.handleRadioButton("15")} checked={this.state.value === "15"}
                 className="hidden peer" />

          <label htmlFor="default-radio-3"
                 className="text-white flex items-center justify-center w-24 h-12 tablet:w-40 laptop:w-52 laptop:h-16 bg-black-jeiom rounded-full border-2 border-white peer-checked:bg-white peer-checked:text-black">
            <p className="tablet:scale-150"><strong>15</strong> DOM</p>
          </label>
        </div>
      </div>

      {this.state.loading && this.state.data.length === 0 ? (
        <div role="status" className="flex justify-center mt-10">
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="mt-10 bg-contact">
          {this.state.value === "13" && <GalleryImages arr={arr13}></GalleryImages>}
          {this.state.value === "14" && <GalleryImages arr={arr14}></GalleryImages>}
          {this.state.value === "15" && <GalleryImages arr={arr15}></GalleryImages>}
        </div>
      )}
    </>
  }
}

export default GallerySection