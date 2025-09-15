import { createContext, useState } from "react";
import runChat from "../config/gemini";
import run from "../config/gemini"; // Import the 'run' function from gemini.js


export const Context = createContext();

const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delaypara = (index, nextword) => {
        setTimeout(function () {
            setResultData(prev => prev + nextword);

        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }



    const onSent = async (prompt) => {
        setLoading(true);
        setShowResult(true);
        setResultData("");  // Clear previous data
    
        let usedPrompt = input;
    
        if (prompt !== undefined) {
            usedPrompt = prompt;
        }
    
        // Avoid adding duplicate prompts
        if (!prevPrompts.includes(usedPrompt)) {
            setPrevPrompts(prev => [...prev, usedPrompt]);  // Only add if it's new
        }
    
        setRecentPrompt(usedPrompt);
    
        try {
            const response = await run(usedPrompt);
            const words = response.split(" ");
            
            for (let i = 0; i < words.length; i++) {
                const nextWord = words[i];
                delaypara(i, nextWord + " ");
            }
    
        } catch (error) {
            console.error("Error while processing prompt:", error);
            setResultData("An error occurred while fetching the result.");
        } finally {
            setLoading(false);
            setInput("");  // Clear input
        }
    };



    const contextValue = {

        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider