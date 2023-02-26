// Hackerman
const mainBtn = document.getElementById('mainBtn');
const container = document.querySelector(".container");
let heading = document.getElementById('heading');


// ALL FUNCTIONS THAT RUN TO HACK, THEY MIGHT TAKE THEIR OWN TIME
const initialize = async () =>{
    
    return new Promise((resolve, reject)=> {
        
        if(mainBtn.classList.contains('is-hacking') == true){
            heading.innerText = 'Initialized hacking...Please wait...';
            setTimeout(()=>{
                resolve('1 done')
            },2000)
            if (mainBtn.classList.contains('is-hacking') == false){
                clearTimeout();   
            } 
        }

    })
}
const fetchData = async () =>{

    return new Promise((resolve, reject) => {
        
        if(mainBtn.classList.contains('is-hacking') == true){
            heading.innerText = 'Fetching data...Please wait...';
            setTimeout(()=>{
                resolve('1 done')
            },2000)
            if (mainBtn.classList.contains('is-hacking') == false){
                clearTimeout();   
            } 
        }
      
    })
    
}
const fetchEmail = async () =>{

    return new Promise((resolve, reject)=>{

        if(mainBtn.classList.contains('is-hacking') == true){
            heading.innerText = 'Fetching Email...Please wait...';
            setTimeout(()=>{
                resolve('1 done')
            },2000)
            if (mainBtn.classList.contains('is-hacking') == false){
                clearTimeout();   
            } 
        }
        
    })

}
const fetchPass = async () =>{

    return new Promise((resolve, reject)=>{

        if(mainBtn.classList.contains('is-hacking') == true){
            heading.innerText = 'Fetching Password...Please wait...';
            setTimeout(()=>{
                resolve('1 done')
            },2000)
            if (mainBtn.classList.contains('is-hacking') == false){
                clearTimeout();   
            } 
        }
    })

}
const LastMessage = async () =>{

    if(mainBtn.classList.contains('is-hacking') == true){
        heading.innerText = 'You Are Hacked';
        mainBtn.classList.add('hacked'); //When hacked, we will add hacked class in button, so it wont work even clicked
        
    }
}



// RUN HACK FUNCTION- RUNS ALL FUNCTIONS ABOVE, WAIT FOR EACH TO COMPLETE ON THEOR TIME(also make changes to front end)
const runHack = async () => {
    mainBtn.classList.toggle('is-hacking'); //main effect because of this

    container.style.backgroundColor= 'black';
    mainBtn.innerText = 'Stop';
    heading.classList.add('hacking-text');
    heading.classList.remove('heading');

    await initialize();
    await fetchData();
    await fetchEmail();
    await fetchPass();
    LastMessage();
    
}
// TO STOP HACK
const stopHack = async () =>{
    
    // Will run only if button does not contains 'hacked' class, which come in lastMessage() function
    if(mainBtn.classList.contains('hacked') == false){
        mainBtn.classList.toggle('is-hacking'); //main effect because of this
    
        container.style.backgroundColor= '#00c8fb';
        mainBtn.innerText = 'Click me';
        heading.classList.remove('hacking-text');
        heading.classList.add('heading');
    
        heading.innerText = 'Good! you stopped on time';
        
    }

    
}


// MAIN----------------
// HACK-BUTTON FUNCTION(Shows changes on Display)
const hackFuncMain = () =>{

    // Everything depends on if button contains following class 'is-hacking'(initially its false, as its not present)
    if(mainBtn.classList.contains('is-hacking') == false){
        runHack();
    }
    else if (mainBtn.classList.contains('is-hacking') == true){
        stopHack();    
    } 
}

// Click on main button
mainBtn.addEventListener('click', hackFuncMain)



// NOTES:
// 1. There are 4 functions that Hyphothetically runs according to there own time(here hardcore time for each in secs)
// 2. All these functions run as a runHack function, waiting for every function to be completed as a promise.
// 3. We can Stop function, by stopping each function with clearTimeOut() if runHack() function is running.
// 4. But after 'You are hacked' LastMessage() function runs, stopHack() function won't work



