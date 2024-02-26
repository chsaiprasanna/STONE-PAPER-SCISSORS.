let userscore=0;
let compscore=0;
let u=document.querySelector("#userscore");
let c=document.querySelector("#compscore");
let b=document.querySelectorAll(".one");
let t=document.querySelector("#text");


/*arr=["ROCK","PAPER","SCISSORS"];
let compmove= arr[Math.floor(Math.random()*3)];*/
    
   

let game=(usermove,compmove)=>{
    if (usermove=="ROCK"&&compmove=="PAPER"){
        compscore+=1;
        c.innerText=compscore;
        t.innerText="COMPUTER WON";
        t.style.color="red";
    }
    else if (usermove=="ROCK"&&compmove=="SCISSORS"){
        userscore+=1;
        u.innerText=userscore;
        t.innerText="CONGRATULATIONS YOU WIN!";
        t.style.color="green";
    }
    else if (usermove=="PAPER"&&compmove=="ROCK"){
        userscore+=1;
        u.innerText=userscore;
        t.innerText="CONGRATULATIONS YOU WIN!";
        t.style.color="green";
    }
    else if (usermove=="PAPER"&&compmove=="SCISSORS"){
        compscore+=1;
        c.innerText=compscore;
        t.innerText="COMPUTER WON";
        t.style.color="red";
    }
    else if (usermove=="SCISSORS"&&compmove=="ROCK"){
        compscore+=1;
        c.innerText=compscore;
        t.innerText="COMPUTER WON";
        t.style.color="red";
    }
    else if (usermove=="SCISSORS"&&compmove=="PAPER"){
        userscore+=1;
        u.innerText=userscore;
        t.innerText="CONGRATULATIONS YOU WIN!";
        t.style.color="green";
    }
    else if(usermove==compmove){
        t.innerText="DRAW";
        t.style.color="#FFE3CA";

    }
}


b.forEach((btn) => {
    btn.addEventListener("click",()=>{
        usermove=btn.innerText;
        arr=["ROCK","PAPER","SCISSORS"];
        let compmove= arr[Math.floor(Math.random()*3)];
        game(usermove,compmove);
    });
    
});

