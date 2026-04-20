const chat = document.getElementById("chat");

let questionIndex = 0;

const questions = [
"I'd love to understand you better… how are you feeling today?",
"Do you prefer calm conversations or energetic ones?",
"When you're stressed, what helps you most?",
"Do you enjoy deep conversations?",
"Do you usually express emotions easily?"
];

// generate more questions
for(let i=1;i<=200;i++){
questions.push("Tell me more about your communication style " + i + "?");
}


function sendMessage(){

let input = document.getElementById("userInput");
let userText = input.value;

if(userText.trim() === "") return;

addUserMessage(userText);

input.value="";

setTimeout(()=>{
let reply = detectIntent(userText.toLowerCase());
addBotMessage(reply);
},500);

}



function detectIntent(text){

// greeting
if(text.includes("hello") || text.includes("hi") || text.includes("hey")){
return "Hi 🌸 I'm Thinkly. How can I help you today?";
}

// about thinkly
if(text.includes("thinkly") || text.includes("about")){
return "Thinkly is a calm conversational companion designed to understand your communication style and emotions. I gently ask questions and adapt based on your responses 🌸";
}

// how it works
if(text.includes("how") && text.includes("work")){
return "I work by learning from your answers. As we talk, I understand your personality and communication patterns to create your Thinkly persona.";
}

// who are you
if(text.includes("who are you")){
return "I'm Thinkly 🌸 A gentle AI designed to talk with you and understand your personality.";
}

// help
if(text.includes("help")){
return "You can ask me about Thinkly, talk about yourself, or I can ask questions to understand you better.";
}

// start questions
if(text.includes("start") || text.includes("begin")){
return nextQuestion();
}

// default → ask question
return nextQuestion();

}



function nextQuestion(){

if(questionIndex < questions.length){

let question = questions[questionIndex];
questionIndex++;

updateProgress();

return question;

}

return "I've learned a lot about you 🌸 Thank you for sharing.";
}



function addUserMessage(text){
chat.innerHTML += `<div class="user-message">${text}</div>`;
chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(text){
chat.innerHTML += `<div class="bot-message">${text}</div>`;
chat.scrollTop = chat.scrollHeight;
}

function updateProgress(){
let progress = (questionIndex/questions.length)*100;
document.getElementById("progressBar").style.width = progress+"%";
}



window.onload = () => {

addBotMessage("Hello 🌸 I'm Thinkly. How can I help you today?");

}
