import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}!`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }


    return (
        <div style={{background: 'cyan', padding:'20px'}}>
            <div>
                <p onMouseOver={() => console.log("Hovered")} >Hola {name}!</p>
                <button className='col' onClick={() => console.log("Boton 1 Pulsado")}>
                    Boton 1!
                </button>
                <button className='col' onClick={() => pressButton()}>
                    Boton 2!
                </button>
                <button className='col' onClick={() => pressButtonParams('Hola!')}>
                    Boton 3!
                </button>
            </div>
            <div className='mt-3'>
                <input className='col'
                placeholder='Insert a text'
                onFocus={() => console.log('Focused!')}
                onChange={(e) => console.log('New Text: ', e.target.value)}
                onCopy={() => console.log('Text Copied!')}
                ref={messageRef}
                ></input>
                <button className='col' onClick={() => send(messageRef.current.value)}>
                    Send Message!
                </button>
            </div>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'></input>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
