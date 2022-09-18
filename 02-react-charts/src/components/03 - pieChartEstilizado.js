import { PieChart, Pie, Cell, Legend, LabelList } from "recharts";
import styles from "./pieChartEstilizado.module.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const colors = ["#f81c1cd3", "#4848e7", "#fd7d27", "#16ed2c", "#5032d6"];

const PieChartExample2 = () => {
  const randomColor = (key) => {
    console.log(key);
    return colors[key];
  };

  return (
    <div className={styles.dashboard}>
      <div width="100%" height="100%" className={styles.chartContainer}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label
            outerRadius={200}
            innerRadius={60}
            dataKey="value"
            nameKey="name"
            className={styles.pie}
          >
            <LabelList
              dataKey="name"
              position="insideTop"
              angle="25"
              className={styles.labels}
            />
            {data.map((singleData, key) => {
              return (
                <Cell
                  fill={randomColor(key)}
                  className={[styles.cell, styles.cellFx].join(" ")}
                />
              );
            })}
          </Pie>
          <Legend verticalAlign="top" height={36} />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartExample2;
