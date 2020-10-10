import React from 'react';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function DashboardHeader() {
  return (
    <Header style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>Applications</h3>
      </div>
      <div>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </Header>
  );
}