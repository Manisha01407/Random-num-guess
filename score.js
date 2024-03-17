let v=Math.floor(Math.random()*20)+1;
let uinp=document.getElementById('userinput');
let usub=document.getElementById('usersub');
let gues=document.getElementById('guematch');
let sco=document.getElementById('score');
let hsco=document.getElementById('hscore');
let b=document.getElementById('by');
let n=document.getElementById('num');
let hs=0;
let c=1;
usub.addEventListener('click',()=>{
    if(uinp.value==v){
        n.innerText=v;
        gues.innerText="perfect";
        let s=20-c;
        sco.innerText="Score:"+s;
        if(hs<s){
            hs=s;
            console.log(hs);
            hsco.innerText="High Score:"+hs;
        }
        b.style.backgroundColor='#FF99FF';
    }else if(uinp.value<v){
        c++;
        gues.innerText="lesser";
    }else if(uinp.value>v){
        c++;
        gues.innerText="greater";
    }
});