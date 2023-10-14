import React from "react"
import TimetableSectionProps from "./index.types"
import Timetable from "@molecules/Timetable"
import simbolo1 from "../../../public/simbolo1.webp"
import simbolo2 from "../../../public/simbolo2.webp"
import simbolo3 from "../../../public/simbolo3.webp"
import simbolo4 from "../../../public/simbolo4.webp"
import simbolo5 from "../../../public/simbolo5.webp"
import simbolo6 from "../../../public/simbolo6.webp"
import Image from "next/image"

import hours from "../../../public/json/timetables.json"

class TimetableSection extends React.Component<TimetableSectionProps> {


  state = {
    value: "13",
  }

  handleRadioButton(value: string) {
    this.setState({
      value: value,
    })
  }

  render() {

    let arr13 = hours["13"]
    let arr14 = hours["14"]
    let arr15 = hours["15"]
    return <>
      <div className="w-full flex items-center justify-evenly laptop:px-20 mt-28">
        <div className="scale-50 tablet:scale-100" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo1}
            alt="simobolo1"
            style={{ width: "60px", height: "43px" }}
          />
        </div>
        <div className="scale-50 tablet:scale-100 justify-center flex" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo2}
            alt="simobolo1"
            style={{ width: "45px", height: "43px" }}
          /></div>

        <div className="scale-50 tablet:scale-100 justify-center flex" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo3}
            alt="simobolo1"
            style={{ width: "39px", height: "43px" }}
          /></div>

        <h2
          className={"antialiased font-semibold text-white text-[10px] tablet:text-[40px] laptop:text-[64px] text-center"}>
          TIMETABLE
        </h2>
        <div className="scale-50 tablet:scale-100 justify-center flex" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo4}
            alt="simobolo1"
            style={{ width: "43px", height: "43px" }}
          /></div>
        <div className="scale-50 tablet:scale-100 justify-center flex" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo5}
            alt="simobolo1"
            style={{ width: "35px", height: "43px" }}
          /></div>

        <div className="scale-50 tablet:scale-100 justify-center flex" style={{ width: "60px", height: "43px" }}>
          <Image
            src={simbolo6}
            alt="simobolo1"
            style={{ width: "43px", height: "43px" }}
          /></div>
      </div>

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
      {this.state.value === "13" && <Timetable arr={arr13}></Timetable>}
      {this.state.value === "14" && <Timetable arr={arr14}></Timetable>}
      {this.state.value === "15" && <Timetable arr={arr15}></Timetable>}

    </>
  }
}

export default TimetableSection