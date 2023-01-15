let elementSecond =  document.getElementById('Second');
let elementMinute =  document.getElementById('Minute');
let elementHour =  document.getElementById('Hour');
let startButton = document.getElementById('starButton');
let stopButton = document.getElementById('stopButton');
let reset = document.getElementById('reset');

let second = 0;
let minute = 0;
let hour = 0;
let intervalSecond;
let intervalMinute;
let intervalHour;

let runable = true;


startButton.addEventListener('click', function(){startAndStop()});
reset.addEventListener('click', reseting);


function setIntervalOfSecond(){

    intervalSecond = setInterval(function(){
        if(runable === true){
            second+=1;  
            if(second === 60){
                second = 0;
                } 
            if(second === 0 || second<10){  
                elementSecond.innerHTML = `0${second}s`;   
            }else{
                    elementSecond.innerHTML = `${second}s`;
                }
    }         
}, 1000) ;

};


function setIntervalOfMinute(){   

    intervalMinute = setInterval(function(){
        if(runable === true){
            if(second === 0){
                minute += 1;
            }
            if(minute === 60){
                minute = 0;
                elementMinute.innerHTML = `0${minute}m`
                hour+=1
            }
        elementMinute.innerHTML = `${minute}m`; 
    }
        }, 1000  );

};


function setIntervalOfHour(){

    intervalHour = setInterval(function(){
        if(runable === true){
            if(hour > 23){
                clearInterval(intervalSecond);
                clearInterval(intervalMinute);
                clearInterval(intervalHour);
            }
    elementHour.innerHTML = `${hour}h`      
    }
        }, 1000 );

};



function startAndStop(){
  
     if(startButton.innerHTML === 'Start'){
        startButton.innerHTML = 'Stop';
     }
     else{
        startButton.innerHTML = 'Start';
     };

     if(startButton.innerHTML === 'Stop'){
        runable = true;

        setIntervalOfSecond();
    
        setIntervalOfMinute();

        setIntervalOfHour();
     }
     else{
        runable = false;

        clearInterval(intervalSecond)
        clearInterval(intervalMinute)
        clearInterval(intervalHour)
     };

 };


function reseting(){

    elementSecond.innerHTML = '00';
    second = 0;
    elementMinute.innerHTML = '00';
    minute = 0;
    elementHour.innerHTML = '00';
    hour = 0;
    clearInterval(intervalSecond);
    clearInterval(intervalMinute);
    clearInterval(intervalHour);
    startButton.innerHTML = 'Start';

}


