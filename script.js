
const chat = document.getElementById("chat");

let currentQuestion = 0;

const questions = [

"How are you feeling today?",
"Do you prefer calm environments?",
"Do you enjoy deep conversations?",
"Do you express emotions easily?",
"Do you prefer working alone?"

];

// Generate 200 questions
for(let i=1;i<=200;i++){
questions.push("Tell me something about your personality "+i+"?");
}


const responses = {

hello:[
"Hi 🌸 I'm Thinkly. I'm happy you're here.",
"Hello, let's talk gently.",
"Hey there, I'm here to listen."
],

how:[
"I'm feeling calm and present 🌼",
"I'm doing well, how about you?",
"I'm good, thanks for asking."
],

thinkly:[
"Thinkly is a calm conversational companion.",
"Thinkly helps you reflect and communicate better.",
"Thinkly is designed for emotional conversations."
],

default:[
"That's interesting. Tell me more.",
"I understand. Go on.",
"I'm listening 🌸"
]

};


function sendMessage(){

let input = document.getElementById("userInput");
let text = input.value;

if(text.trim() === "") return;

addUserMessage(text);

input.value = "";

setTimeout(()=>{

let reply = generateReply(text.toLowerCase());
addBotMessage(reply);

},500);

}


function generateReply(text){

if(text.includes("hello") || text.includes("hi")){
return random(responses.hello);
}

if(text.includes("how are you")){
return random(responses.how);
}

if(text.includes("thinkly")){
return random(responses.thinkly);
}

if(currentQuestion < questions.length){

let question = questions[currentQuestion];
currentQuestion++;
updateProgress();

return question;

}

return random(responses.default);

}


function addUserMessage(text){
chat.innerHTML += `<div class="user-message">${text}</div>`;
chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(text){
chat.innerHTML += `<div class="bot-message">${text}</div>`;
chat.scrollTop = chat.scrollHeight;
}

function random(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function updateProgress(){

let progress = (currentQuestion/questions.length)*100;
document.getElementById("progressBar").style.width = progress+"%";

}

window.onload = () => {

addBotMessage("Hi 🌸 I'm Thinkly. Let's talk and understand you better.");

setTimeout(()=>{
addBotMessage(questions[0]);
},800);

};
