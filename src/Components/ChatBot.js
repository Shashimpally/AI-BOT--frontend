import './ChatBot.css';
import logo from '../assets/ai-logo.png.png';
import React, { useState } from 'react';
import './ChatBot.css';
import logo from '../assets/ai-logo.png';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Dummy AI response (you can replace this with real OpenAI API later)
    const botReply = "🤖 I'm your AI bot!";
    setMessages(prev => [...prev, { role: 'bot', content: botReply }]);
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <img src={logo} alt="AI Bot Logo" className="chatbot-logo" />
        <h1>Neon AI Bot</h1>
      </header>

      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Ask me anything..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
