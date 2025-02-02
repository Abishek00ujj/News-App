import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import {Search} from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import  Loader from '../assets/loading.gif';
const Newspage = () => {
    let Size=10;
    const searchQuery=useRef(null);
    const [data,setData]=useState([]);
    const [Loading,setLoading]=useState(true);
    const notify = (message) => toast(message,{
        icon:"🎉"
    });
    const getData=async(query)=>{
        try
        {
         const res=await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=${Size}&apiKey=3440fa16b8254c3e96c6575ea694297a`);
         setData(res.data.articles);
       //  console.log(data);
        }
        catch(err)
        {
           console.log(err);
        }
        finally
        {
             setLoading(false);
        }
    };
    const handleSearch=()=>{
        setLoading(true);
         const searchQuery1=searchQuery.current.value;
         if(searchQuery1==null)
         {
            return;
         }
         getData(searchQuery1);
    }
    //console.log(data);
    useEffect(()=>{
        notify("welcome");
        getData("Tech");
    },[]);
  return (
    <>
    <Header/>
    <div className='w-screen h-screen bg-[#24292e]'>
     <Toaster />
        <div className='w-full flex justify-center items-center h-[100px] flex-col space-y-3'>
            <div className='flex space-x-2'>
            <input ref={searchQuery} type="text" className='max-sm:w-[300px] w-[600px] h-[30px] bg-[#24292e] border-2 border-black rounded-2xl p-5'/>
           <div onClick={handleSearch} className='flex justify-center items-center rounded-full bg-green-400 p-2'> <Search size={30}/></div>
            </div>
            <div className='flex space-x-3'>
            <div className='bg-gray-600 rounded-3xl pl-2 pr-2 text-blue-300' onClick={getData("Politics")}>Politics</div>
            <div className='bg-gray-600 rounded-3xl pl-2 pr-2 text-blue-300' onClick={getData("Science")}>Science</div>
            <div className='bg-gray-600 rounded-3xl pl-2 pr-2 text-blue-300' onClick={getData("Health")}>Health</div>
            <div className='bg-gray-600 rounded-3xl pl-2 pr-2 text-blue-300' onClick={getData("Sports")}>Sports</div>
            <div className='bg-gray-600 rounded-3xl pl-2 pr-2 text-blue-300' onClick={getData("Bussiness")}>Bussiness</div>
            </div>
        </div>
        <div className='w-screen flex flex-col justify-center items-center space-y-3'>
            {
                  
                !Loading?(
                    data && data.map((item, index) => (
                        <Card key={index} data={item} />
                      ))
                ):(
                    <div className='w-screen h-screen flex justify-center items-center'>
                           <img className='w-[200px] h-[200px]' src={Loader} alt="" />
                    </div>
                )
            }
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Newspage