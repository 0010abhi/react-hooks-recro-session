import React from 'react';
import { Form, Input } from 'antd';

export default function TextInput(props) {
  return (
    <Form.Item
      name={props.sid}
      label={props.sid}
      rules={[]}
    >
      <Input disabled={props.disabled} />
    </Form.Item>
  )
}