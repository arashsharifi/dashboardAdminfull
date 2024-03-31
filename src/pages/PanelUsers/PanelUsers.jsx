import React from "react";
import { transActionData } from "../../assets/data";
import Table from "../../Components/Table/Table";
import Typewriter from "typewriter-effect";
import LineChartWithReferenceLines from "../../Components/charts/LineChartWithReferenceLines";
import ListTrand from "../../Components/ListTrand/ListTrand";
import BarChartHasBackground from "../../Components/charts/BarChartHasBackground";
import Footer from "../../Components/Footer/Footer";

export default function PanelUsers() {
  return (
    <div className="flex flex-col gap-3 rtl font-iransans">
      <div className=" relative flex items-center justify-center p-4 bg-dark-purple text-white rounded-lg mx-auto w-[95%] m-8">
        <div className="absolute rotate-45 bg-sky-700 rounded-lg w-8 h-8 top-[-10px] right-5"></div>
        <div className="absolute rotate-45 bg-sky-700 rounded-lg w-8 h-8 top-[-10px] right-16"></div>
        <div className="absolute rotate-45 bg-sky-700 rounded-lg w-8 h-8 bottom-[-10px] left-16"></div>
        <div className="absolute rotate-45 bg-sky-700 rounded-lg w-8 h-8 bottom-[-10px] left-5"></div>
        <Typewriter
          options={{
            strings: [
              "لیست کارمندان که بهترین حقوق داشتن",
              "بهترین های امسال ",
            ],
            autoStart: true,
            loop: true,
            delay: 400,
          }}
        />
      </div>
      <div className="w-[90%] mx-auto  flex items-center justify-center">
        <Table datasTable={transActionData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <ListTrand />
        <div className="flex items-center p-2 ">
          <LineChartWithReferenceLines />
        </div>
      </div>
      <div className=" flex m-3">
        <BarChartHasBackground />
      </div>
      <Footer />
    </div>
  );
}
