import React from 'react';

import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    name: 'Income eREIT',
    portfolio: '28.2%',
    share: '$23,609.12',
    position: '$23,692.66'
  },
  {
    key: '2',
    name: 'Growth eREIT',
    portfolio: '13.7%',
    share: '$11,447.62',
    position: '$11,478.70'
  },
  {
    key: '3',
    name: 'East Coast eREIT',
    portfolio: '10.9%',
    share: '$9,094.72',
    position: '$9,119.05'
  }
];

const PositionsTable = () => {
  return (
    <Table dataSource={data} pagination={{ position: 'none' }}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="% of portfolio" dataIndex="portfolio" key="portfolio" />
      <Column title="Est. value of shares" dataIndex="share" key="share" />
      <Column title="Position total" dataIndex="position" key="position" />
    </Table>
  );
};

export default PositionsTable;
