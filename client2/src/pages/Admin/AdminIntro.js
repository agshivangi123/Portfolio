import React from 'react';
import { Form, Input, Button, Checkbox , message } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminIntro() {
  const dispatch = useDispatch();
  const { portFolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(ShowLoading());
      const response = await axios.post('http://localhost:3001/api/portfolio/update-intro', {
        ...values,
        _id: portFolioData?.intro?._id
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success("Intro Updated Successfully")
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      message.error(error.message)
    }
  }
  return (
      <div>
        <Form 
        onFinish={onFinish} 
        layout='vertical'
        initialValues={portFolioData?.intro[0]}
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

export default AdminIntro
