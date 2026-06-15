let date = document.getElementById("dateOfTheDay");
presentDate = new Date();
const day = presentDate.getDate();
const month = presentDate.getMonth() + 1;
const year = presentDate.getFullYear();
date.innerHTML = `${day} - ${month} - ${year}`;
let today = document.getElementById("today");
todayDate = new Date();
let dayName = todayDate.toLocaleDateString("en-US", { weekday: "long" });
today.innerHTML = dayName;

let input = document.getElementById("inputField");
let btn = document.getElementById("btn");
let mainContainer = document.getElementById("mainContainer");
const main = document.getElementById("main");
const div = document.createElement("div");
main.appendChild(div);

window.addEventListener("load", () => {
  input.value = "";
});

btn.addEventListener("click", () => {
  let errorMsg = document.querySelector(".errorP");
  if (input.value === "") {
    if (document.querySelector(".errorP")) return;
    const p = document.createElement("p");
    p.innerHTML = "PLEASE ADD A LIST TO PROCEED!";
    p.classList.add("errorP");
    mainContainer.appendChild(p);
  } else {
    if (errorMsg) {
      errorMsg.remove();
    }
    const div = document.createElement("div");
    div.classList.add("mainDivP");
    main.appendChild(div);
    const para = document.createElement("p");
    para.innerHTML = input.value;
    para.classList.add("paraStyle");
    div.appendChild(para);
    const divNew = document.createElement("div");
    divNew.classList.add("divNew");
    div.appendChild(divNew);
    input.value = "";
    const rmBtn = document.createElement("button");
    rmBtn.classList.add("rmBtn");
    rmBtn.innerText = "RM"
    divNew.appendChild(rmBtn)
    rmBtn.addEventListener("click",(e)=>{
        div.remove()
    })
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("rmBtn")
    doneBtn.innerText = "DN"
    divNew.appendChild(doneBtn)
    doneBtn.addEventListener("click",()=>{
        para.classList.toggle("paraStyleAfter")
    })
    const editBtn = document.createElement("button")
    editBtn.classList.add("rmBtn")
    editBtn.innerText = "ED"
    divNew.appendChild(editBtn)
    editBtn.addEventListener("click",()=>{
        let arr = []
        arr.push(para.innerText)
        div.remove()
        input.value = arr[0]
        
    })
  }
});
