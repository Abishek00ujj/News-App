import React from 'react'
import News from '../assets/news.png'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from './Header';
const NewsX = () => {
    //const navigate=useNavigate();
    const location=useLocation();
    const {data}=location.state||{};
    const {author,content,description,publishedAt,title,url,urlToImage}=data;
   // console.log(content);
  return (
    <>
    <Header/>
    <div className='w-screen h-screen bg-[#24292e] flex flex-col justify-start  p-2 space-y-3'>
        <div className='w-screen flex justify-center'>
        <div className='max-sm:w-[80%] w-[30%] flex rounded-2xl border-2 justify-between border-white'>
           <img src={urlToImage||News} alt="" />
        </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center text-blue-400 text-[20px]'>
            <p>{title}</p>
        </div>
        <div className='text-white'>
            <p>{description}</p>
        </div>
        <div className='text-white'>
            <p>{content}</p>
        </div>
        <div className='w-full flex justify-end'>
            <p className='text-blue-600'>
                <a href={url}>Read more</a>
            </p>
        </div>
        <div className='w-full flex flex-col justify-end text-white'>
            <p>Author:✍️<span className='font-bold'>{author}</span></p>
            <p>Published:⌚{publishedAt}</p>
        </div>
    </div>
    </>
  )
}

export default NewsX