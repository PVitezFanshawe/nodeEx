(() => {
    const socket = io();


    //declaring vars
    let messageList = document.querySelector('ul'),
    chatForm = document.querySelector('form'),
    nameInput = document.querySelector('.nickname'),
    chatMessage = chatForm.querySelector('.message');
    nickName = null;

    function setNickname(){
        //debugger;
        nickName = this.value; //set nickname
    }

    function handleSendMessage(e){ //the e is the event property
        e.preventDefault(); //prevents the default action  when you click
        //debugger;
        nickName = (nickName && nickName.length > 0) ? nickName : 'user'; //ternary statment ("is nickName set" && "did a user set a value" ? is nickname is set > use the user set name :(or) if not set nickName = 'user') trevor probably explains it better

        msg =`${nickName} says ${chatMessage.value}`; //create a message with nickname and the text from the text box on the page
        socket.emit('chat message', msg); //emmit the message
        chatMessage.value = '';//clear for the next message
        return false;
    }
    function appendMessage(msg){
        //debugger;
        let newMsg = `<li>${msg.message}</li>`; //create a list element for the message
        messageList.innerHTML += newMsg; // add to the page
    }
    function appendDMessage(msg){
        // debugger;
        let newMsg = `<li>${msg}</li>`; //same as appendMessage, but for disconnect
        messageList.innerHTML += newMsg; // add to the page
    }

    //adding listeners 
    nameInput.addEventListener('change', setNickname, false);
    chatForm.addEventListener('submit', handleSendMessage, false);
    socket.addEventListener('chat message', appendMessage, false);
    socket.addEventListener('disconnect message', appendDMessage, false);
})();
