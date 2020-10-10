import React from 'react';
import { Form, Input } from 'antd';
import Dropdown from '../Dropdown';

export default function InputGroup(props) {
  return (
    <Form.Item
      name={props.sid}
      label={props.sid}
      rules={[]}
    >
      <Input.Group compact>
        <Dropdown noForm sid='countryCode'/>
        <Input style={{ width: '70%' }} placeholder='Mobile Number' />
      </Input.Group>
    </Form.Item>
  )
}