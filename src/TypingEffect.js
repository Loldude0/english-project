import React, { useEffect, useState, useRef } from 'react';

const TypingEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [startTyping, setStartTyping] = useState(false);
    const i = useRef(0);

    useEffect(() => {
        if (startTyping) {
            const interval = setInterval(() => {
                if (i.current < text.length) {
                    setDisplayedText(text.substring(0, i.current + 1));
                    i.current++;
                } else {
                    clearInterval(interval);
                }
            }, 40);
            return () => clearInterval(interval);
        }
    }, [text, startTyping]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
            {!startTyping && (
              <button 
                onClick={() => setStartTyping(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  padding: '10px',
                  fontSize: '20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  maxWidth: '200px',
                  outline: 'none',
                }}
              >
                <span>What is AI?</span>
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '10px solid white',
                  marginLeft: '10px',
                }}/>
              </button>
            )}
            <p>{displayedText}</p>
          </div>
    );
};

export default TypingEffect;