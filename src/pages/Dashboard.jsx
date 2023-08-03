import React from 'react';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper';
import Stats from '../components/stats/Stats';
import SummaryStats from '../components/summary-stats/SummaryStats';
import data from '../constants/data';
//import {data} from '../../public/constants/data';

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
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        righ
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard