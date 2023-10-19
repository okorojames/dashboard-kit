const HomeFooter = () => {
  return (
    <div className="mb-12 grid grid-cols-2 items-center justify-center gap-6">
      {/*  */}
      <div className=" shadow-shadow_one py-4 px-6 rounded-xl">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-medium text-3xl text-slate-700 mb-2">
              Unsolved tickets
            </h3>
            <p className="flex items-center gap-3">
              <span className="text-slate-500">Group</span>
              <span className="text-slate-700">support</span>
            </p>
          </div>
          <p className="text-blue-500 text-xl cursor-pointer">View details</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 mt-8">
          <div className="flex justify-between items-center py-4 px-5 hover:bg-slate-100 cursor-pointer">
            <p className="font-medium text-slate-600">
              Waiting on feature request
            </p>
            <p className="text-slate-400">4238</p>
          </div>
          <div className="flex justify-between items-center py-4 px-5 hover:bg-slate-100 cursor-pointer">
            <p className="font-medium text-slate-600">
              Awaiting customer response
            </p>
            <p className="text-slate-400">1003</p>
          </div>
          <div className="flex justify-between items-center py-4 px-5 hover:bg-slate-100 cursor-pointer">
            <p className="font-medium text-slate-600">Awaiting dev fix</p>
            <p className="text-slate-400">224</p>
          </div>
          <div className="flex justify-between items-center py-4 px-5 hover:bg-slate-100 cursor-pointer">
            <p className="font-medium text-slate-600">Pending</p>
            <p className="text-slate-400">15</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" shadow-shadow_one py-4 px-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium text-3xl text-slate-700 mb-2">Tasks</h3>
            <p className="text-slate-400">Today</p>
          </div>
          <p className="text-blue-500 text-xl cursor-pointer">View details</p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default HomeFooter;
