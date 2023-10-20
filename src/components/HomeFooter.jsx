import { BiPlus } from "react-icons/bi";
import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";

const HomeFooter = () => {
  const { theme } = useContext(Theme);
  //
  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-stretch justify-center gap-6">
      {/*  */}
      <div className=" shadow-shadow_one py-4 rounded-xl">
        <div className="flex justify-between px-6 items-end">
          <div>
            <h3
              className={`font-medium text-3xl ${
                theme === "dark" ? "text-slate-200" : "text-slate-700"
              } mb-2`}
            >
              Unsolved tickets
            </h3>
            <p className="flex items-center gap-3">
              <span
                className={`${
                  theme === "dark" ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Group
              </span>
              <span
                className={`${
                  theme === "dark" ? "text-slate-50" : "text-slate-700"
                }`}
              >
                support
              </span>
            </p>
          </div>
          <p className="text-blue-500 text-xl cursor-pointer">View details</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 mt-8">
          <div
            className={`flex justify-between items-center py-4 px-6 ${
              theme === "dark" ? "hover:bg-gray-500" : "hover:bg-slate-100"
            } cursor-pointer border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            }`}
          >
            <p
              className={`font-medium ${
                theme === "dark" ? "text-slate-100" : "text-slate-500"
              }`}
            >
              Waiting on feature request
            </p>
            <p className="text-slate-400">4238</p>
          </div>
          <div
            className={`flex justify-between items-center py-4 px-6 ${
              theme === "dark" ? "hover:bg-gray-500" : "hover:bg-slate-100"
            } cursor-pointer border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            }`}
          >
            <p
              className={`font-medium ${
                theme === "dark" ? "text-slate-100" : "text-slate-500"
              }`}
            >
              Awaiting customer response
            </p>
            <p className="text-slate-400">1003</p>
          </div>
          <div
            className={`flex justify-between items-center py-4 px-6 ${
              theme === "dark" ? "hover:bg-gray-500" : "hover:bg-slate-100"
            } cursor-pointer border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            }`}
          >
            <p
              className={`font-medium ${
                theme === "dark" ? "text-slate-100" : "text-slate-500"
              }`}
            >
              Awaiting dev fix
            </p>
            <p className="text-slate-400">224</p>
          </div>
          <div
            className={`flex justify-between items-center py-4 px-6 ${
              theme === "dark" ? "hover:bg-gray-500" : "hover:bg-slate-100"
            } cursor-pointer `}
          >
            <p
              className={`font-medium ${
                theme === "dark" ? "text-slate-100" : "text-slate-500"
              }`}
            >
              Pending
            </p>
            <p className="text-slate-400">15</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" shadow-shadow_one py-4 px-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3
              className={`font-medium text-3xl ${
                theme === "dark" ? "text-slate-50" : "text-slate-700"
              } mb-2`}
            >
              Tasks
            </h3>
            <p className="text-slate-400">Today</p>
          </div>
          <p className="text-blue-500 text-xl cursor-pointer">View details</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 mt-8">
          <div
            className={`flex justify-between items-center gap-20 border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            } py-3`}
          >
            <input
              type="text"
              className={`w-full border-none outline-none py-2 placeholder:text-xl ${
                theme === "dark" ? "bg-transparent text-slate-100" : ""
              }`}
              placeholder="create new task"
            />
            <BiPlus
              className={`text-5xl ${
                theme === "dark" ? "text-slate-50" : "text-slate-600"
              } cursor-pointer`}
            />
          </div>
          {/*  */}
          <div
            className={`flex justify-between items-center gap-20 border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            } py-3`}
          >
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                id="overview_check_task_a"
                className="overview_tasks_check"
              />
              <label
                htmlFor="overview_check_task_a"
                className={`cursor-pointer select-none ${
                  theme === "dark" ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Finish ticket Update
              </label>
            </div>
            <div className="text-slate-100 bg-yellow-500 cursor-pointer rounded-2xl py-3 px-6 select-none">
              Urgent
            </div>
          </div>
          {/*  */}
          <div
            className={`flex justify-between items-center gap-20 border-b-2 ${
              theme === "dark" ? "border-gray-500" : "border-slate-200"
            } py-3`}
          >
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                id="overview_check_task_b"
                className="overview_tasks_check"
              />
              <label
                htmlFor="overview_check_task_b"
                className={`cursor-pointer select-none ${
                  theme === "dark" ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Create new ticket example
              </label>
            </div>
            <div className="text-slate-100 bg-green-500 cursor-pointer rounded-2xl py-3 px-6 select-none">
              New
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between items-center gap-20 py-3">
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                defaultChecked={true}
                id="overview_check_task_c"
                className="overview_tasks_check"
              />
              <label
                htmlFor="overview_check_task_c"
                className={`cursor-pointer select-none ${
                  theme === "dark" ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Update ticket report
              </label>
            </div>
            <div className="text-slate-700 bg-slate-200 cursor-pointer rounded-2xl py-3 px-6 select-none">
              Default
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
