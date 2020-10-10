import React from 'react';
import { Layout } from 'antd';
import DashboardSider from '../components/dashboard-sider';
import DashboardHeader from '../components/dashboard-header';

const { Content } = Layout;

export default function DashboardLayout(props) {
  return (
    <div className="App">
      <Layout>
        <DashboardSider />
        <Layout>
          <DashboardHeader />
          <Content style={{ display: 'flex' }}>{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}