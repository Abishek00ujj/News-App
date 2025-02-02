import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { Search } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import Loader from '../assets/loading.gif';

const Newspage = () => {
  const API_KEY = "ce145d000c3644819251eb53b10b5d0a";
  const Size = 10;
  const searchQuery = useRef(null);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const notify = (message) => toast(message, { icon: "🎉" });

  const getData = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://newsapi.org/v2/everything?q=${query}&pageSize=${Size}&apiKey=${API_KEY}`
      );
      setData(res.data.articles);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const searchQuery1 = searchQuery.current.value.trim();
    if (!searchQuery1) {
      toast.error("Please enter a search query");
      return;
    }
    getData(searchQuery1);
  };

  useEffect(() => {
    notify("Welcome to the News App!");
    getData("Tech");
  }, []);

  return (
    <>
      <Header />
      <div className='w-screen h-auto bg-[#24292e]'>
        <Toaster />
        <div className='w-full flex justify-center items-center h-[100px] flex-col space-y-3'>
          <div className='flex space-x-2'>
            <input
              ref={searchQuery}
              type="text"
              className='max-sm:w-[300px] w-[600px] h-[30px] text-white bg-[#24292e] border-2 border-black rounded-2xl p-5'
              placeholder='Search news...'
            />
            <div onClick={handleSearch} className='flex justify-center items-center rounded-full bg-green-400 p-2 cursor-pointer'>
              <Search size={30} />
            </div>
          </div>
          <marquee behavior="" direction="">
          <div className='flex space-x-3'>
            {["Politics", "Science", "Health", "Sports", "Business"].map((category) => (
              <div
                key={category}
                className='bg-gray-600 rounded-3xl px-4 py-1 text-blue-300 cursor-pointer'
                onClick={() => getData(category)}
              >
                {category}
              </div>
            ))}
          </div>
          </marquee>
         
        </div>

        <div className='w-screen flex flex-col justify-center items-center space-y-3'>
          {!Loading ? (
            data.length > 0 ? (
              data.map((item, index) => <Card key={index} data={item} />)
            ) : (
              <p className='text-white'>No articles found.</p>
            )
          ) : (
            <div className='w-full min-h-[50vh] flex justify-center items-center'>
              <img className='w-[200px] h-[200px]' src={Loader} alt="Loading..." />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Newspage;
