import React from 'react'
import News from '../assets/news.png'
import { useNavigate } from 'react-router-dom';
const Card = ({ data }) => {
    const navigate=useNavigate();
    const sendProps=()=>{
        navigate('/newsx/',{state:{data:data}});
    }
    if (!data) return null;
  
    const { title, url, urlToImage = "https://via.placeholder.com/300" } = data;
  
    return (
      <div className="w-[300px] h-[350px] bg-gray-700 rounded-2xl flex flex-col justify-between p-3">
        <div className="w-full h-[50%]">
          <img
            src={urlToImage||News}
            alt="news"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="text-white p-2">
          <p className="text-sm font-bold">{title}</p>
        </div>
        <div className="w-full flex justify-end p-2">
          <a
            onClick={sendProps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-sm"
          >
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  