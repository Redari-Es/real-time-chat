import React from 'react'

interface ChatInputProps {
    send: (e: KeyboardEvent) => void
}

const ChatInput = ({ send }: ChatInputProps) => {
    return (
        <div className='chatInput'>
            <input type="text"
                className='p-2.5 m-0 rounde-md border-solid border border-gray-500 shadow:lg w-auto'
                onKeyDown={(e) => send(e)
                }
            />
        </div>
    )
}

export default ChatInput