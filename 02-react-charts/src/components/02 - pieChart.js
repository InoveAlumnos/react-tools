import { PieChart, Pie, Cell, Label, Legend, LabelList } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const PieChartExample = () => {
  return (
    <div width="100%" height="100%">
      <PieChart width={600} height={600} id={true}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          label
          outerRadius={200}
          fill="#000000"
          dataKey="value"
          nameKey="name"
        >
          <LabelList dataKey="name" position="insideTop" />
          <Cell fill="#0088FE" />
          <Cell fill="#00C49F" />
          <Cell fill="#FFBB28" />
          <Cell fill="#FF8242" />
        </Pie>
        <Legend verticalAlign="top" height={36} />
      </PieChart>
    </div>
  );
};

export default PieChartExample;
