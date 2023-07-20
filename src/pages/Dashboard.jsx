import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        Main
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        right
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard