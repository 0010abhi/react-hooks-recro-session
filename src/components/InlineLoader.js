import React from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function antIcon() {
  return (
    <LoadingOutlined style={{ fontSize: 24 }} spin />
  );
};

export default function InlineLoader() {
  return (
    <Spin indicator={antIcon} />
  );
};

