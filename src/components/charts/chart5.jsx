import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Not Optimized URLs", "Pending Optimizations", "Optimized URLs"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 72, 244],
      backgroundColor: ["#FF465c70", "#FFCB6570", "#38F8AC70"],
      borderColor: ["#FF465c", "#FFCB65", "#38F8AC"],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: 46,
  plugins: {
    legend: {
      display: false, // Set display to false to hide the legend
    },
  },
};

export default function App({imageData}) {
  let totalImage =  0,  
    pendingImages = 0,
    optimizeImage = 0;

  if(imageData?.totalOptimizeImage !==0){
    totalImage=imageData?.totalImages-imageData?.totalOptimizeImage;
  }


  const ChartData = {
  labels: ["Not Optimized URLs", "Pending Optimizations", "Optimized URLs"],
  datasets: [
    {
      label: "# of Votes",
      data: [totalImage, imageData?.totalOptimizeImage],
      backgroundColor: ["#FF465c70", "#FFCB6570", "#38F8AC70"],
      borderColor: ["#FF465c", "#FFCB65", "#38F8AC"],
      borderWidth: 1,
    },
  ],
};
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="relative w-[140px] w-[140px] large:ml-[10%]">
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="absolute w-[140px] text-[22px] font-semibold h-[140px] flex items-center justify-center"
      >
        {imageData?.totalImages}
      </div>
      <div className=" w-[140px] w-[140px]">
        <Doughnut data={ChartData} options={options} />
      </div>
    </div>
  );
}