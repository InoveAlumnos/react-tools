import { PieChart, Pie, Cell, Legend, LabelList } from "recharts";
import styles from "./pieChartEstilizado.module.css";
import { useState } from "react";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const colors = ["#f81c1cd3", "#4848e7", "#fd7d27", "#16ed2c", "#5032d6"];

const DataCard = (props) => {
  const { name, value, visible } = props;
  const [visibility, setVisibility] = useState(visible);
  const visibilityStatus =  visibility ? "visible" : "hidden" 
  return (
    <div className={styles.dataCard} style={{visibility:visibilityStatus}}>
      <div>Data:</div>
      <div>👉 Name: {name}</div>
      <div>👉 Value: {value}</div>
    </div>
  );
};

const PieChartExample2 = () => {
  const [state, setState] = useState(data[0]);
  const [visibility, setVisibility] = useState(visible);
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
                  onClick={()=>setState(singleData)}
                />
              );
            })}
          </Pie>
          <Legend verticalAlign="top" height={36} />
        </PieChart>
      </div>
      <DataCard name={state.name} value={state.value} visibility={visibility} />
    </div>
  );
};

export default PieChartExample2;
