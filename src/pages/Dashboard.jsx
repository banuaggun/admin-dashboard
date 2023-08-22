import React from 'react';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper';
import Stats from '../components/stats/Stats';
import SummaryStats, { SummaryStatsSpecial } from '../components/summary-stats/SummaryStats';
import data from '../constants/data';
//import {data} from '../../public/constants/data';
import colors from '../constants/colors';
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from '../components/overall-list/OverallList';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
            {
              data.summary.map((item, index) => (
                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                  <SummaryStats item={item}/>
                </div>
              ))
            }
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryStatsSpecial item={data.revenueSummary}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Stats>
              <RevenueByMonthsChart/>
            </Stats>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">
          Overall
        </div>
        <div className="mb">
            <OverallList/>
        </div>
        <div className="title mb">
          Revenue By Channel
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMonthsChart = () => {
  const chartOptions = {
    resposive:true,
    maintainAspectRatio:false,
    scales:{
      xAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      },
      yAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      }
    },
    plugins:{
      legend:{
        display:false
      },
      title:{
        display:false
      }
    },
    elements:{
      bar:{
        backgroundColor:colors.orange,
        borderRadius:20,
        borderSkipped:'bottom'
      }
    }
  }

  const chartData = {
    labels:data.revenueByMonths.labels,
    datasets:[
      {
        label:'Revenue',
        data:data.revenueByMonths.data
      }
    ]
  }
  return(
    <>
      <div className="title mb">
        Revenue by Months
      </div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  )
}