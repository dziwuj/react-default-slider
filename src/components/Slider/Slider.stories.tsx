import React from "react";
import Slider from "./Slider";

// example of styling by css
// import "./RangeSlider.scss";

export default {
    title: "RangeSlider",
};

const datesArray: string[] = [
    "01-01-2020",
    "01-02-2020",
    "01-03-2020",
    "01-04-2020",
    "01-05-2020",
    "01-06-2020",
    "01-07-2020",
    "01-08-2020",
    "01-09-2020",
    "01-10-2020",
    "01-11-2020",
    "01-12-2020",
    "01-13-2020",
    "01-14-2020",
    "01-15-2020",
    "01-16-2020",
    "01-17-2020",
    "01-18-2020",
    "01-19-2020",
    "01-20-2020",
    "01-21-2020",
    "01-22-2020",
    "01-23-2020",
    "01-24-2020",
    "01-25-2020",
    "01-26-2020",
    "01-27-2020",
    "01-28-2020",
    "01-29-2020",
    "01-30-2020",
    "01-31-2020",
    "02-01-2020",
    "02-02-2020",
    "02-03-2020",
    "02-04-2020",
    "02-05-2020",
    "02-06-2020",
    "02-07-2020",
    "02-08-2020",
    "02-09-2020",
    "02-10-2020",
    "02-11-2020",
    "02-12-2020",
    "02-13-2020",
    "02-14-2020",
    "02-15-2020",
    "02-16-2020",
    "02-17-2020",
    "02-18-2020",
    "02-19-2020",
    "02-20-2020",
    "02-21-2020",
    "02-22-2020",
    "02-23-2020",
    "02-24-2020",
    "02-25-2020",
    "02-26-2020",
    "02-27-2020",
    "02-28-2020",
    "02-29-2020",
    "03-01-2020",
    "03-02-2020",
    "03-03-2020",
    "03-04-2020",
    "03-05-2020",
    "03-06-2020",
    "03-07-2020",
    "03-08-2020",
    "03-09-2020",
    "03-10-2020",
    "03-11-2020",
    "03-12-2020",
    "03-13-2020",
    "03-14-2020",
    "03-15-2020",
    "03-16-2020",
    "03-17-2020",
    "03-18-2020",
    "03-19-2020",
    "03-20-2020",
    "03-21-2020",
    "03-22-2020",
    "03-23-2020",
    "03-24-2020",
    "03-25-2020",
    "03-26-2020",
    "03-27-2020",
    "03-28-2020",
    "03-29-2020",
    "03-30-2020",
    "03-31-2020",
    "04-01-2020",
];

//create array of all small letters from alphabet

const lettersArray: string[] = [];

for (let i = 0; i < 26; i++) {
    lettersArray.push(String.fromCharCode(97 + i));
}

const someData = {
    min: 0,
    max: 1,
    step: 0.1,
};

document.body.style.backgroundColor = "#343434";

export const Primary = () => (
    <>
        <div style={{ width: "500px" }}>
            <Slider
                value={datesArray}
                tooltipVisibility="always"
                tooltipPosition="over"
                onChange={(x) => {
                    console.log("1: ", x);
                }}
                start={"03-25-2020"}
                formatter={(x: any) => `${x.substring(0, 5)}`}
            />
        </div>
        <div style={{ width: "400px" }}>
            <Slider
                value={{ min: 0, max: 1, step: 0.1 }}
                start={0.7}
                hasSteps
                formatter={(x: any) => (Math.round(Number(x) * 100) / 100).toString()}
                onChange={(x) => {
                    console.log("2: ", x);
                }}
            />
        </div>
    </>
);
