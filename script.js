
const questions = [

"How do you react when someone disagrees with you?",
"Do you prefer calm conversations or debates?",
"How often do you express emotions online?",
"Do you use emojis frequently?",
"Do you avoid conflicts?",
"Do you speak before thinking?",
"Do you enjoy deep conversations?",
"Do you give constructive feedback?",
"Do you comfort people easily?",
"Do you prefer texting or calling?",

// Continue auto generating 200 questions

];

for(let i=1;i<=200;i++){
questions.push("Personality question "+i+" ?");
}

let current = 0;

function sendMessage(){

let input = document.getElementById("userInput");
let chat = document.getElementById("chat");

if(input.value === "") return;

chat.innerHTML += `
<div class="user-message">${input.value}</div>
`;

input.value = "";

setTimeout(()=>{

if(current < questions.length){

chat.innerHTML += `
<div class="bot-message">${questions[current]}</div>
`;

current++;

updateProgress();

}else{

chat.innerHTML += `
<div class="bot-message">
🌸 Your Persona: Calm Communicator 
You prefer thoughtful conversations and emotional clarity.
</div>
`;

}

chat.scrollTop = chat.scrollHeight;

},500);

}

function updateProgress(){
let progress = (current/questions.length)*100;
document.getElementById("progressBar").style.width = progress + "%";
}

window.onload = ()=>{
document.getElementById("chat").innerHTML += `
<div class="bot-message">${questions[0]}</div>
`;
}
