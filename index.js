var numerOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numerOfButton; i++){
    // var audio = new Audio("sounds/tom-1.mp3");
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHtml = this.innerHTML;
        // console.log(buttonInnerHtml);
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
    
}
 document.addEventListener("keydown",(event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);

 })

       function makeSound(keyVal){
         switch (keyVal) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "s":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "d":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "j":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "k":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "l":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            default: console.log(buttonInnerHtml);
                break;
        };
    
    } 

    function buttonAnimation(curentKey) {
    var activeButton = document.querySelector("."+ curentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 1000);
    }
    



 


