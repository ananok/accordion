let qOne=document.querySelector(".q1")
let rOne=document.querySelector(".r1")
let qTwo=document.querySelector(".q2")
let rTwo=document.querySelector(".r2")
let qThree=document.querySelector(".q3")
let rThree=document.querySelector(".r3")
let qFour=document.querySelector(".q4")
let rFour=document.querySelector(".r4")
let qFive=document.querySelector(".q5")
let rFive=document.querySelector(".r5")
let sec=document.querySelector(".main")
let butt=document.querySelectorAll("button")



let member=(arg)=>{
if (arg==="x" ){
    if (!rOne.style.display || rOne.style.display == "none"){
        qOne.style.fontWeight="bold";
        rOne.style.display="block"
        butt[0].style.backgroundImage="url('./images/Path 2.png')"
    
     }else{
        qOne.style.fontWeight="normal";
        rOne.style.display="none"
        butt[0].style.backgroundImage="url('./images/icon-arrow-down.svg')"
     }
}else if(arg==="y"){
    if (!rTwo.style.display || rTwo.style.display == "none"){
        qTwo.style.fontWeight="bold";
        rTwo.style.display="block"
        butt[1].style.backgroundImage="url('./images/Path 2.png')"
    
     }else{
        qTwo.style.fontWeight="normal";
        rTwo.style.display="none"
        butt[1].style.backgroundImage="url('./images/icon-arrow-down.svg')"
     }
}else if (arg==="z"){
    if (!rThree.style.display || rThree.style.display == "none"){
        qThree.style.fontWeight="bold";
        rThree.style.display="block"
        butt[2].style.backgroundImage="url('./images/Path 2.png')"
        document.body.style.height="100%"
        sec.style.height="700px"
    
     }else{
        qThree.style.fontWeight="normal";
        rThree.style.display="none"
        butt[2].style.backgroundImage="url('./images/icon-arrow-down.svg')"
        sec.style.height="620px"
     }
}else if(arg==="m"){
    if (!rFour.style.display || rFour.style.display == "none"){
        qFour.style.fontWeight="bold";
        rFour.style.display="block"
        butt[3].style.backgroundImage="url('./images/Path 2.png')"

     }else{
        qFour.style.fontWeight="normal";
        rFour.style.display="none"
        butt[3].style.backgroundImage="url('./images/icon-arrow-down.svg')"
     }
}else if(arg==="w"){
    if (!rFive.style.display || rFive.style.display == "none"){
        qFive.style.fontWeight="bold";
        rFive.style.display="block"
        butt[4].style.backgroundImage="url('./images/Path 2.png')"
    
     }else{
        qFive.style.fontWeight="normal";
        rFive.style.display="none"
        butt[4].style.backgroundImage="url('./images/icon-arrow-down.svg')"
     }
    }
}
 