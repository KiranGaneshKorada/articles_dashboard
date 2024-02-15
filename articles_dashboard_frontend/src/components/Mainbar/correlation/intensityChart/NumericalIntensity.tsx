import { Chart } from "react-google-charts";
import useBubbleChart from "./useBubleCHart";




export function NumericalIntensity() {

    const {each_topic_count,error,isLoading}=useBubbleChart()
    const options = {
      title:
        "Correlation between life expectancy, fertility rate " +
        "and population of some world countries (2010)",
      hAxis: { title: "Intensity" },
      vAxis: { title: "Impact" },
      bubble: { textStyle: { fontSize: 11 } },
    };



    const data=(each_topic_count?.Data.map((each)=>([each[0],each[1].intensity__avg,each[1].impact__avg,each[0],each[1].likelihood__avg])))
    // console.log((data1))

    // const data= [
    //   ["ID", "Intensity", "Impact", "Topic", "Likelihood"],data1?.map((each)=>each)
    // ];

  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}
