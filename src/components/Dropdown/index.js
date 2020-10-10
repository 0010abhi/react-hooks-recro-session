import React from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

export default function Dropdown(props) {
  if (props.noForm) {
    return (
      <Select defaultValue="+91" style={{ width: '30%' }}>
        <Option value="+91">+91</Option>
        <Option value="+92">+92</Option>
      </Select>
    )
  }
  return (
    <Form.Item
      name={props.sid}
      label={props.sid}
      rules={[]}
    >
      <Select defaultValue="+91" style={{ width: '30%' }}>
        <Option value="+91">+91</Option>
        <Option value="+92">+92</Option>
      </Select>
    </Form.Item>
  )
}