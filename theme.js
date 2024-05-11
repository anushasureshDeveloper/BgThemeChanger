const btn=document.querySelector("#btn")

let randomColor=()=>{
    let str="012345ABCD"
    let hash="#"
    for(let i=0; i<6; i++){
        hash=hash+str[Math.floor(Math.random()*str.length)]
        btn.innerHTML=hash
    }
    return hash
}
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColor()
})

