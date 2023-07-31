import React from "react";
import "./summarystats.scss";
import Stats from "../stats/Stats";
import {
    buildStyles,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import colors from "../../constants/colors";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const SummaryStats = ({ item }) => {
    return (
        <Stats>
            <div className="summary__stats">
                <div className="summary__stats__info">
                    <div className="summary__stats__info__title">
                        <div>{item.title}</div>
                        <span>{item.subtitle}</span>
                    </div>
                    <div className="summary__stats__info__value">
                        {item.value}
                    </div>
                </div>
                <div className="summary__stats__chart">
                    <CircularProgressbarWithChildren
                        value={item.percent}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor:
                              item.percent < 50 ? '#ff0000' : '#00ff00',
                              trailColor: "#dcdcdc",
                              strokeLinecap: "round",
                        })}
                        className="summary__stats__chart__area"
                    >
                        <div className="summary__stats__chart__value">
                            {item.percent}%
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </Stats>
    );
};

export default SummaryStats;
