"use client"
import React from 'react'
import { connect, sendMsg } from "@/api";
import ChatHistory from '@/components/ChatHistory';
import ChatInput from '@/components/ChatInput';


const Home = () => {
  function sendHello() {
    console.log("hello")
    sendMsg("hello")

  }
  function send(e: KeyboardEvent) {
    if (e.key === 'Enter' && e.target) {
      const value = (e.target as HTMLInputElement).value;
      sendMsg(value); // 发送消息
      console.log(value);
      (e.target as HTMLInputElement).value = ''
      e.preventDefault(); // 阻止默认行为，如表单提交
    }
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-4'>

        <ChatHistory />
        <ChatInput send={send} />
        {/* 
        <button
          className='p-2 border border-blue-500'
          onClick={() => send()}
        >Hit</button> 
        */}
      </div>
    </div>
  )
}

export default Home