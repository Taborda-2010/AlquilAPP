import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/chat.css';

const Chat: React.FC = () => {
    const { productId } = useParams();
    const [messages, setMessages] = useState([
        { from: 'propietario', text: '¡Hola! Gracias por reservar mi artículo.' },
        { from: 'propietario', text: '¿Dónde te gustaría recogerlo?' },
    ]);
    const [newMsg, setNewMsg] = useState('');

    const handleSend = () => {
        if (newMsg.trim() === '') return;

        setMessages([...messages, { from: 'usuario', text: newMsg }]);
        setNewMsg('');
    };

    return (
        <main className="chat-page">
            <h2>Chat con el propietario del artículo #{productId}</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-bubble ${msg.from}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Enviar</button>
            </div>
        </main>
    );
};

export default Chat;
