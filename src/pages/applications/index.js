import { Button } from 'antd';
import React from 'react';
import TextInput from '../../components/TextInput';
import DashboardLayout from '../../layouts/dashboardLayout';

export default function Applications() {
  return (
    <DashboardLayout>
      <div style={{ backgroundColor: '#fff', borderRadius: '4px',  padding: '15px', margin: '15px', flexGrow: 1 }}>
        <div>
          <TextInput sid='search_applications' />
          <Button>Create Applications</Button>
        </div>

      </div>
    </DashboardLayout>
  );
}