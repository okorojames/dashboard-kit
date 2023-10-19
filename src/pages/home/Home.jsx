import DashBoxes from "../../components/DashBoxes";
import { data } from "../../components/data";
import Navbar from "../../components/navbar/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Home = () => {
  //
  return (
    <>
      <Navbar />
      <div className="home_page px-8">
        {/*  */}
        <DashBoxes />
        <LineChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            className=" stroke-slate-800"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" className=" stroke-blue-600" />
        </LineChart>
        {/*  */}
      </div>
    </>
  );
};

export default Home;
