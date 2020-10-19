import React from "react";
import { Doughnut } from "react-chartjs-2";

const Pie = ({ data }) => {
  console.log(data);
  return data ? (
    <Doughnut
      data={{
        labels: [...Object.keys(data)],
        datasets: [
          {
            barPercentage: 1,
            hoverBackgroundColor: "#e3e3ef",
            data: [...Object.values(data)],
          },
        ],
      }}
      options={{
        legend: false,
        maintainAspectRatio: false,
        cutoutPercentage: 0,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      }}
    />
  ) : (
    ""
  );
};

export default Pie;
