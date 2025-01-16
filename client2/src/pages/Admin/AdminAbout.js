import React from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { useSelector } from 'react-redux';

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = (values)=>{
    console.log(values)
  }
  return (
    <div>
      <Form 
      onFinish={onFinish} 
      layout='vertical'
      initialValues={portfolioData?.intro[0]}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder='Intro...' />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <input placeholder="Description" />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 bg-primary text-white' type='submit'>
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout
