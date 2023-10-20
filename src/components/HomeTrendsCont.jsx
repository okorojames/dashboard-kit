import { useContext } from "react";
import HomeTrendsChart from "./HomeTrendsChart";
import { Theme } from "../contexts/ThemeContext";

const HomeTrendsCont = () => {
  const { theme } = useContext(Theme);
  //
  return (
    <div
      className={`trends_cont mt-6 ${
        theme === "dark" ? "text-slate-100" : "text-slate-700"
      } flex items-stretch justify-between gap-40 flex-wrap mdThree:flex-nowrap shadow-shadow_one rounded-xl p-6 mb-32`}
    >
      <div className="w-full">
        <div className="flex flex-wrap justify-between items-end gap-4 w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-700 font-bold text-3xl">
              Today{"'s"} Trend
            </h3>
            <p className="font-medium text-lg text-slate-500">
              as of 25 Mar 2023, 09:41 AM
            </p>
          </div>
          <div className="flex items-center justify-between gap-16">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="bg-blue-400 w-forty h-four rounded-lg"></div>
              <div>Today</div>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="bg-slate-400 w-forty h-four rounded-lg"></div>
              <div>Yesterday</div>
            </div>
          </div>
        </div>
        <HomeTrendsChart />
      </div>
      {/*  */}
      <div className="flex items-center justify-center flex-col text-center gap-8 w-full mdThree:w-1/2">
        <div className="py-4 border-b-2 border-slate-300 w-full">
          <p className="text-2xl font-medium text-slate-500 mb-4">Resolved</p>
          <h3 className="font-bold text-3xl">449</h3>
        </div>
        <div className="py-4 border-b-2 border-slate-300 w-full">
          <p className="text-2xl font-medium text-slate-500 mb-4">Received</p>
          <h3 className="font-bold text-3xl">426</h3>
        </div>
        <div className="py-4 border-b-2 border-slate-300 w-full">
          <p className="text-2xl font-medium text-slate-500 mb-4">
            Average First Response Time
          </p>
          <h3 className="font-bold text-3xl">33m</h3>
        </div>
        <div className="py-4 border-b-2 border-slate-300 w-full">
          <p className="text-2xl font-medium text-slate-500 mb-4">
            Average Response Time
          </p>
          <h3 className="font-bold text-3xl">8h 25m</h3>
        </div>
        <div className="py-4 border-b-2 border-slate-300 w-full">
          <p className="text-2xl font-medium text-slate-500 mb-4">
            Resoltion within SLA
          </p>
          <h3 className="font-bold text-3xl">94%</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeTrendsCont;
