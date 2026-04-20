
const questions = [

{
question:"How are you feeling today?",
followup:"That's interesting. Would you say your mood changes often?"
},

{
question:"Do you prefer working alone or with others?",
followup:"That tells a lot about your collaboration style."
},

{
question:"Do you express your emotions easily?",
followup:"Emotional expression helps build deeper connections."
},

{
question:"Do you like calm environments?",
followup:"Calm spaces often help creativity bloom 🌸"
},

{
question:"Do you enjoy helping others?",
followup:"That's a very Thinkly trait."
}

];

// Generate 200 questions automatically
for(let i=1;i<=200;i++){
questions.push({
question:"Tell me about your communication habit "+i+"?",
followup:"Interesting, I'm learning more about your personality."
})
}


let current = 0;

const thinklyResponses = {

hello:[
"Hi there 🌸 I'm Thinkly, happy to meet you.",
"Hello! I'm here to understand you better.",
"Hey! Let's explore your personality together."
],

how_are_you:[
"I'm feeling calm and ready to talk with you 🌼",
"I'm doing great, especially now that you're here.",
"I'm good! How about you?"
],

what_is_thinkly:[
"Thinkly is a calm conversational space designed to understand people.",
"Thinkly helps you reflect on your thoughts and communication style.",
"Thinkly is like a soft AI companion built for emotional conversations."
],

who_are_you:[
"I'm Thinkly, your conversational persona assistant.",
"I'm here to understand how you communicate.",
"I'm a gentle AI designed to talk and learn about you."
],

default:[
"That's interesting. Tell me more.",
"I see. Can you elaborate?",
"Hmm… I'm curious about that.",
"That's thoughtful."
]

};


function sendMessage(){

let input = document.getElementById("userInput");
let chat = document.getElementById("chat");

let userText = input.value.toLowerCase();

if(input.value === "") return;

chat.innerHTML += `
<div class="user-message">${input.value}</div>
`;

input.value = "";

setTimeout(()=>{

let response = getBotResponse(userText);

chat.innerHTML += `
<div class="bot-message">${response}</div>
`;

chat.scrollTop = chat.scrollHeight;

},600);

}



function getBotResponse(text){

if(text.includes("hello") || text.includes("hi"))
return randomResponse(thinklyResponses.hello);

if(text.includes("how are you"))
return randomResponse(thinklyResponses.how_are_you);

if(text.includes("thinkly"))
return randomResponse(thinklyResponses.what_is_thinkly);

if(text.includes("who are you"))
return randomResponse(thinklyResponses.who_are_you);

if(current < questions.length){

let q = questions[current].question;
current++;

updateProgress();

return q;

}

return randomResponse(thinklyResponses.default);

}



function randomResponse(arr){
return arr[Math.floor(Math.random()*arr.length)];
}



function updateProgress(){
let progress = (current/questions.length)*100;
document.getElementById("progressBar").style.width = progress + "%";
}



window.onload = ()=>{

document.getElementById("chat").innerHTML += `
<div class="bot-message">
Hi 🌸 I'm Thinkly. 
I'm here to understand you better.  
Let's begin...
</div>
`;

setTimeout(()=>{

document.getElementById("chat").innerHTML += `
<div class="bot-message">${questions[0].question}</div>
`;

},800);

}
