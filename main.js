//speech to text
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textBox").innerHTML="";
    recognition.start();
};
recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("selfie taken");
        Speak();
    }

};
//Text to speech
function Speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png'
});
camera = document.getElementById("camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    })
}
function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click()
}