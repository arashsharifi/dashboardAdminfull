import React from "react";
import BoxesDahboard from "../../Components/BoxesDashboard/BoxesDahboard";
import SimpleChart from "../../Components/charts/SimpleChart";

import { xAxisData } from "../../assets/data";
import TransactionChart from "../../Components/charts/TransactionChart";
import PieChartComponent from "../../Components/charts/PieChartComponent";
import PieChartWithCustomizedLabel from "../../Components/charts/PieChartWithCustomizedLabel";

import VerticalComposedChart from "../../Components/charts/VerticalComposedChart";
import PieChartWithNeedle from "../../Components/charts/PieChartWithNeedle";
import PercentAreaChart from "../../Components/charts/PercentAreaChart";
import HighlightAndZoomLineChart from "../../Components/charts/HighlightAndZoomLineChart";
import BrushBarChart from "../../Components/charts/BrushBarChart";
import TinyLineChart from "../../Components/charts/TinyLineChart";

import MixBarChart from "../../Components/charts/MixBarChart";
import Footer from "../../Components/Footer/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col p-4 w-full font-iransans">
      <BoxesDahboard />

      <div className="flex flex-col md:flex-row gap-3 items-center w-full m-2 border shadow-lg rounded-md p-3">
        <div className="w-[100%] md:[50%]">
          <SimpleChart
            title="چارت فروش روزانه"
            data={xAxisData}
            dataKey="sale"
            grid={true}
          />
        </div>
        <div className="w-[90%] flex  flex-col gap-4 p-3">
          <p>برسی وعضیت</p>
          <p className="">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          </p>
        </div>
      </div>
      <div className="flex flex-col p-2 ">
        <div className="w-[100%]">
          <TransactionChart />
        </div>
        <div className=" w-full  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-3 border shadow-lg rounded-md">
          <div className="flex items-center gap-3 p-3">
            <div className="flex flex-col">
              <h4 className="text-xl">مهارت های کاربران </h4>
              <p className="text-gray-400">
                {" "}
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
              </p>
            </div>
          </div>
          <PieChartComponent />
          <PieChartWithCustomizedLabel />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 m-3">
        <div className="border w-[100%] md:w-[60%] flex flex-col gap-4 p-3 shadow-lg rounded-md">
          <p className="block md:hidden">
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          </p>
          <div className="flex">
            <PercentAreaChart />
          </div>
          <p>
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ارهای کاربردی می باشد. کتابهای زیادی
          </p>
        </div>
        <div className="border w-[100%] md:w-[40%] flex items-center justify-center p-3 shadow-lg rounded-md bg-red-300">
          <VerticalComposedChart />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row p-3 m-3">
        <HighlightAndZoomLineChart />
      </div>
      <div className=" flex flex-col md:flex-row gap-5 m-3 ">
        <div className="flex flex-col  rounded-md shadow-lg shadow-black bg-dark-purple text-white w-[90%] md:w-[40%] mx-auto md:mx-0 p-4">
          <p className="p-2 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          </p>
          <TinyLineChart />
        </div>
        <div className="flex items-center justify-center  w-[100%] mx-auto md:mx-0 md:w-[60%]">
          <BrushBarChart />
        </div>
      </div>
      <div className="flex flex-col m-4 bg-[#82CA9D] rounded-md text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 border-b-4 p-1">
          <MixBarChart />
          <MixBarChart />
          <MixBarChart />
        </div>
        <p className="p-3">
          ت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
          مجله در ستون و سطرآنچنان که لازم است و لورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
          متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        </p>
      </div>
      <Footer />
    </div>
  );
}
