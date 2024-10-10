import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PercentageDoughnutProps {
  percentage: number;
}

export const PercentageDoughnut: React.FC<PercentageDoughnutProps> = ({ percentage }) => {
  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [100 - percentage, percentage],
        backgroundColor: ["#373737", "#729E70"],
        borderColor: "transparent",
        cutout: 20,
        hoverOffset: 2,
      },
    ],
  };

  return (
    //   <CircularProgress value={40} color={"#729E70"} thickness={"20px"}>
    //   <CircularProgressLabel>40%</CircularProgressLabel>
    // </CircularProgress>
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
        {percentage}%
      </Box>
    </Box>
  );
};
