import React from "react";
import { IoIosBasket } from "react-icons/io";
import { SiInfracost } from "react-icons/si";
import { ImUsers } from "react-icons/im";
const dataBoxes = [
  {
    id: 1,
    count: 4000,
    profitLoss: 40,
    title: "فروش کل",
    icon: <IoIosBasket />,
    style: "#49A0E2",
    styleprofitLoss: "#ff7675",
    profitLosstext: "ضرر شد",
  },
  {
    id: 2,
    count: 3450,
    profitLoss: 19,
    title: " کل هزینه ها ",
    icon: <SiInfracost />,
    style: "#DD622C",
    styleprofitLoss: "#00b894",
    profitLosstext: " سود شد",
  },
  {
    id: 3,
    count: 2670,
    profitLoss: 20,
    title: "کل مشتریان",
    icon: <ImUsers />,
    style: "#F1CE47",
    styleprofitLoss: "#ff7675",
    profitLosstext: " ضرر شد",
  },
  {
    id: 4,
    count: 7450,
    profitLoss: 31,
    title: " کل سفارشات",
    icon: <ImUsers />,
    style: "#4EA257",
    styleprofitLoss: "#00b894",
    profitLosstext: " سود شد",
  },
];
import LandingCounter from "../LandingCounter/LandingCounter";
export default function BoxesDahboard() {
  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 rtl">
      {dataBoxes.map((data) => (
        <div className="flex gap-2 border rounded-md shadow-md" key={data.id}>
          <div
            style={{ background: data.style }}
            className="w-12 h-12 text-white flex items-center justify-center rounded-full m-2"
          >
            {data.icon}
          </div>
          <div className="flex flex-col gap-2 p-1">
            <h3 className="text-lg text-gray-500 p-1">{data.title}</h3>
            <div className="flex gap-3 ">
              <div className="  p-0">
                <LandingCounter count={data.count} />
              </div>

              <div
                className="flex gap-2   p-1 rounded-lg"
                style={{ background: data.styleprofitLoss }}
              >
                <div className="flex gap-2 items-center  text-[11px]">
                  <p>{data.profitLosstext} </p>
                  <p>{data.profitLoss.toLocaleString("fa-IR")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
