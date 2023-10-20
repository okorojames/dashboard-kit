import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2017",
    range: 10,
    result: 20,
    amt: 20,
  },
  {
    name: "2018",
    range: 20,
    result: 58,
    amt: 20,
  },
  {
    name: "2019",
    range: 30,
    result: 39,
    amt: 20,
  },
  {
    name: "2020",
    range: 8,
    result: 38,
    amt: 20,
  },
  {
    name: "2021",
    range: 20,
    result: 40,
    amt: 81,
  },
  {
    name: "2022",
    range: 60,
    result: 30,
    amt: 50,
  },
  {
    name: "2023",
    range: 25,
    result: 40,
    amt: 20,
  },
];

export default function HomeTrendsChart() {
  return (
    <ResponsiveContainer width="98%" height="80%" className="mt-12">
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="range"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="result"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
