import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { data } from "./exampleData";

const BarChartExample = () => {
  console.log(data);
  return (
    <div>
        <h1>Ejemplo 2: Gráfico de barras 📊</h1>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    <h1>BarChart: <a href="https://recharts.org/en-US/api/BarChart">LINK</a></h1>
    </div>
  );
};

export default BarChartExample;
