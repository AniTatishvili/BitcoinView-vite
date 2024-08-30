import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PercentageDoughnut = () => {
  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [10, 15],
        backgroundColor: ["#373737", "#729E70"],
        borderColor: "transparent",
        cutout: 20,
        hoverOffset: 2,
      },
    ],
  };

  return (
    <Box w={"80px"} h={"80px"} pos={"relative"}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          layout: {
            padding: 2,
          },

          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
            title: {
              display: true,
              text: "Donations information",
            },
          },
        }}></Doughnut>
      <Box pos={"absolute"} top={"45%"} left={"50%"} transform={"translate(-45%, -50%)"} fontSize={"12px"}>
        45%
      </Box>
    </Box>
  );
};
