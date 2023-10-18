import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_page px-8">
        {/*  */}
        <div className="grid grid-cols-4 gap-8">
          <div className="dash_boxes cursor-pointer py-8 px-8 rounded-lg transition duration-500 flex flex-col items-center gap-4 text-slate-400">
            <p className="text-2xl font-medium">Unsolved</p>
            <h4 className="transition duration-500 font-bold text-4xl text-slate-600">
              60
            </h4>
          </div>
          <div className="dash_boxes cursor-pointer py-8 px-8 rounded-lg transition duration-500 flex flex-col items-center gap-4 text-slate-400">
            <p className="text-2xl font-medium">Overdue</p>
            <h4 className="transition duration-500 font-bold text-4xl text-slate-600">
              16
            </h4>
          </div>
          <div className="dash_boxes cursor-pointer py-8 px-8 rounded-lg transition duration-500 flex flex-col items-center gap-4 text-slate-400">
            <p className="text-2xl font-medium">Open</p>
            <h4 className="transition duration-500 font-bold text-4xl text-slate-600">
              43
            </h4>
          </div>
          <div className="dash_boxes cursor-pointer py-8 px-8 rounded-lg transition duration-500 flex flex-col items-center gap-4 text-slate-400">
            <p className="text-2xl font-medium">On Hold</p>
            <h4 className="transition duration-500 font-bold text-4xl text-slate-600">
              64
            </h4>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Home;
