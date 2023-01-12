import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue = 150;


//* (Expresion TRUE) && expresion => se renderiza la expresion 
//* (Expresion FALSE) && expresion => no se renderiza la expresion



//? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

//? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};


const OptionalRender = () => {


    const [access, setAccess] = useState(false);
    var [messages, setMessages] = useState(0);

/*     function updateAccess() {
        setAccess(!access);
    }
*/


//?     login/logout button
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    );
}

const LogoutButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    );
}


    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }



    let optionalButton;

    if(access){
        optionalButton = <LogoutButton propStyle={ unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
    }

    //? Unread Messages

    let addMessage = () => {
      setMessages(messages+1);
    }


    return (
        <div>
            {/* optional button  */}
            {optionalButton}
            {/* N messages unread */}
            {/*{messages > 0 && messages === 1 && <p style={{color: 'white'}}>You have {messages} new messages...</p>}
            {messages > 1 && <p style={{color: 'white'}}>You have {messages} new messages...</p>}
            {messages === 0 && <p style={{color: 'white'}}>There are not new messages</p>} */}
            {/* Ternay Operators */}
            { access ? 
            <div>
                {messages > 0 ?
                <p style={{color: 'white'}}>You have {messages} new message{messages > 1 ? 's' : null}...</p> :
                <p style={{color: 'white'}}>There are not new messages</p>
                }
                <button onClick={addMessage}>{messages === 0 ? 'Add your first message' : 'Add new message'}</button>
            </div> : null}
        </div>
    );
}

export default OptionalRender;
