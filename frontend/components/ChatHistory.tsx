"use client"
import { connect } from '@/api'
import React, { useEffect, useState } from 'react'

interface Message {
    data?: string | undefined
}
// interface ChatHistoryProps {
//     chatHistory: Message[]
// }


function ChatHistory() {
    const [chatHistory, setChatHistory] = useState<Message[]>([])

    useEffect(() => {
        const handleMessage = (msg: Message) => {
            console.log("New Message")
            setChatHistory(prevState => [...prevState, msg])
            console.log(chatHistory)
        }
        connect(handleMessage)
        return () => {
            console.log("Cleanup on component unmount")
        }
    }, [])

    return (
        <div className="chatHistory">
            <h2 className='text_h2'>Chat History</h2>
            {chatHistory && chatHistory.map((msg, index) => (
                <p key={index}>{msg.data}</p>
            ))}
        </div >
    );
}
export default ChatHistory