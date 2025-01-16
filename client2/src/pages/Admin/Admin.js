import React from 'react'
import Header from '../../components/Header';
import { Tabs } from "antd";
import { TabsProps } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import AdminAbout from './AdminAbout';
import AdminIntro from './AdminIntro';
import { useSelector } from 'react-redux';

function Admin() {
  const {portfolioData} = useSelector((state) => state.root);

  const onChange = (key) => {
    console.log(key);
  };

  // const items = [
  //   {
  //     key: '1',
  //     label: 'Tab 1',
  //     children: 'Content of Tab Pane 1',
  //   },
  //   {
  //     key: '2',
  //     label: 'Tab 2',
  //     children: 'Content of Tab Pane 2',
  //   },
  //   {
  //     key: '3',
  //     label: 'Tab 3',
  //     children: 'Content of Tab Pane 3',
  //   },
  // ];


  return (
    <div>
      <Header />
      <div className='mt-5 p-5'>
      {portfolioData &&<Tabs defaultActiveKey='2' onChange={onChange}>
        <TabPane tab="Intro" key="2">
        <AdminIntro />
        </TabPane>
        <TabPane tab="About" key="3">
          <AdminAbout />
        </TabPane>
      </Tabs>}
      </div>
    </div>
  )
}

export default Admin
