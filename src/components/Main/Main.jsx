import React, { useContext } from 'react';
import "./Main.css";
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import ReactMarkdown from 'react-markdown';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    // Define card prompts
    const suggestionCardsData = [
        { prompt: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon, alt: "Compass Icon" },
        { prompt: "Briefly summarize this concept: urban planning", icon: assets.bulb_icon, alt: "Bulb Icon" },
        { prompt: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon, alt: "Message Icon" },
        { prompt: "Improve the readability of the following code", icon: assets.code_icon, alt: "Code Icon" }
    ];

    // Function to handle sending a card's prompt
    const handleCardClick = (prompt) => {
        onSent(prompt);  // Pass the card's prompt to the onSent function
    };

    // Function to handle sending input on button click or "Enter" key press
    const handleSend = () => {
        if (input.trim() !== "") {
            onSent(); // Call the function to send the input
            setInput(""); // Clear the input after sending
        }
    };

    // Function to handle the "Enter" key press
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend(); // Send the input when "Enter" is pressed
        }
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                         <div className="cards">
                            {/* Improvement: Use .map() to render cards dynamically */}
                            {suggestionCardsData.map((card, index) => (
                                <div className="card" key={index} onClick={() => handleCardClick(card.prompt)}>
                                    <p>{card.prompt}</p>
                                    <img src={card.icon} alt={card.alt} />
                                </div>
                            ))}
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="User Icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini Icon" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <ReactMarkdown>{resultData}</ReactMarkdown>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                            type="text" 
                            placeholder='Enter your prompt here!' 
                            onKeyDown={handleKeyDown} // Added the onKeyDown event
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <img 
                                onClick={handleSend} 
                                src={assets.send_icon} 
                                alt="Send Icon" 
                            />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini App
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
