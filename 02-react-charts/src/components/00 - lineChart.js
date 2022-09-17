import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "A", valor: 400 },
  { name: "B", valor: 250 },
  { name: "C", valor: 437 },
  { name: "D", valor: 120 },
  { name: "E", valor: 245 },
  { name: "F", valor: 330 },
];

const RenderLineChart = () => {
  return (
    <div>
      <h1>Ejemplo 1: Line Chart 📈</h1>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="valor" stroke="#8884d8" strokeWidth={4} />
        <CartesianGrid stroke="black" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h2>
        Atributos: <a href="recharts.org/en-US/api/Line">LINK</a>
      </h2>
    </div>
  );
};

export default RenderLineChart;
