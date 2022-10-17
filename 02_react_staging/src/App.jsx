import React, { Component } from 'react'
import { Button, DatePicker} from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {QqOutlined,ArrowDownOutlined} from '@ant-design/icons';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Button type="primary">Primary Button</Button>
        <Button type="">Primary Button</Button>
        <QqOutlined style={{fontSize:'20px',color:'#1890FF'}}/>
        <Button type='primary' icon={<ArrowDownOutlined />}>Download</Button>
        <DatePicker onChange={onChange} locale={locale}/>
      </div>
    )
  }
}

