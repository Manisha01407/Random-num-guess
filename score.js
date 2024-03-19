let v=Math.floor(Math.random()*20)+1;
let uinp=document.getElementById('userinput');
let usub=document.getElementById('usersub');
let gues=document.getElementById('guematch');
let sco=document.getElementById('score');
let hsco=document.getElementById('hscore');
let b=document.getElementById('by');
let n=document.getElementById('num');
let p_again=document.getElementById('p_again');
let hs=0;
let s=20;
usub.addEventListener('click',()=>{
    if(uinp.value==v){
        n.innerText=v;
        gues.innerText="perfect";
        sco.innerText="Score:"+s;
        if(hs<s){
            hs=s;
            hsco.innerText="High Score:"+hs;
        }
        b.style.backgroundColor='#FF99FF';
    }else if(uinp.value<v){
        gues.innerText="lesser";
        sco.innerText="Score:"+--s;
    }else if(uinp.value>v){
        gues.innerText="greater";
        sco.innerText="Score:"+--s;
    }
})
p_again.addEventListener('click',()=>{
    s=20;
    v=Math.floor(Math.random()*20)+1;
    n.innerText='?';
    uinp.value="";
    gues.innerText="Start Guessing";
    sco.innerText="Score:20";
    b.style.backgroundColor='black';
})