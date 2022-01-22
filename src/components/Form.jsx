import React, { useState, useRef } from 'react';
import './Form.css';
import Message from './Message';


function Form() {
    const [countMessage, setCountMessage] = useState(0);
    const [historyMessages, setHistoryMessages] = useState([]);

    const inputName = useRef();
    const inputText = useRef();

    const pushHistoryMessages = (historyMessages) => {
        const name = inputName.current.value
        const text = inputText.current.value

        const message = {
            name: "",
            text: "",
            dataTime: new Date
        }

        console.log(message);

        inputText.current.value = "";

        historyMessages.push(message);
        setCountMessage(historyMessages.length);
        setHistoryMessages([...historyMessages]);
    }

    return(
        <div className="Form__box">
            <div className="Box__title">
                Сообщения {countMessage}
            </div>
            <div className="Box__messages">
                {historyMessages.map((message, index) => (
                    <Message 
                        message={message} 
                        key={'message_' + index} />
                ))}
            </div>
            <div className="Box__send">
                <label>
                    Имя
                    <input type="text" ref={inputName} />
                </label>
                
                <label>
                    Сообщение
                    <textarea ref={inputText} />
                </label>

                <button 
                    onClick={
                        () => pushHistoryMessages(historyMessages)
                    }>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default Form;