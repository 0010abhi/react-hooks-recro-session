import React from 'react';
import { withRouter } from 'react-router';
import { Layout, List, Button } from 'antd';

const { Sider } = Layout;

const DATA = ['Applications', 'Profile', 'Settings'];

function DashboardSider(props) {
  return (
    <Sider theme='light'>{
      <List
        size="large"
        header={<div style={{ textAlign: 'center' }}><h1>sastoo</h1></div>}
        footer={<Button type='primary' onClick={() => { props.history.push('') }} >Log Out</Button>}
        // bordered
        dataSource={DATA}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    }</Sider>
  );
}

export default withRouter(DashboardSider);
