import RenderLineChart from "./00 - lineChart";
import BarChartExample from "./01 - barChart";
import PieChartExample from "./02 - pieChart";
import s from "./dashboard.module.css"

const Dashboard = () => {
    return (
        <>
            <h1 className={[s.title, s.shadow].join(" ")}>Dashboard example
                <img
                    src={"https://cdn-icons-png.flaticon.com/512/893/893220.png"}
                    width="40px"
                >
                </img>
            </h1>
            <div className={s.container}>
                <div className={[s.lineBarChartsContainer, s.shadow].join(" ")}>
                    <h3>Year activity</h3>
                    <RenderLineChart />
                    <h3>Year activity [pv and vu]</h3>
                    <BarChartExample />
                </div>
                <div className={[s.piechartContainer, s.shadow].join(" ")}>
                    <h3>Year activity [By Group]</h3>

                    <PieChartExample />
                </div>
            </div>
        </>
    )
}

export default Dashboard;