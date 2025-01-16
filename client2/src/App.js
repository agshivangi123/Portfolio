import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from "./redux/rootSlice";
import Admin from "./pages/Admin/Admin";

function App() {
  const [showLoader, setShowLoader] = useState(false)
  const { loading } = useSelector((state) => state.root);
  const dispatch  = useDispatch();
  const getPortfolioData = async() => {
    try{
      const response = await axios.get('http://localhost:3001/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      
      console.log(response.data)
    }catch(error){
      console.log("Error in fetching portfolio data",error)
    }
  }
  useEffect(() => {
    getPortfolioData()
  },[]);



  return (
    <BrowserRouter>
    {showLoader ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
