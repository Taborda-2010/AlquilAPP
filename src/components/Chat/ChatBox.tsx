import React, { useState } from 'react';
import './ChatBox.css';

interface Message {
    id: string;
    sender: 'yo' | 'otro';
    content: string;
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', sender: 'otro', content: '¡Hola! ¿Dónde nos encontramos?' },
        { id: '2', sender: 'yo', content: 'Hola, ¿te parece en la biblioteca?' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const newMsg: Message = {
            id: Date.now().toString(),
            sender: 'yo',
            content: newMessage,
        };

        setMessages([...messages, newMsg]);
        setNewMessage('');

        // Simular respuesta automática (solo para demo)
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    sender: 'otro',
                    content: '¡Perfecto, nos vemos allí!',
                },
            ]);
        }, 1000);
    };

    return (
        <div className="chatbox">
            <div className="messages">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`message ${msg.sender === 'yo' ? 'my-message' : 'other-message'}`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ChatBox;
