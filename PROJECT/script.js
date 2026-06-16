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

const greet = document.getElementById("greet");
greet.style.color = "lime";
greet.style.transition = "0.5s";

const dateTime = new Date();
const hour = dateTime.getHours();

if (hour >= 5 && hour < 12) {
  switch (true) {
    case hour === 5:
      greet.innerHTML = "EARLY START = BIG WIN ";
      break;
    case hour === 6:
      greet.innerHTML = "READY FOR A BRAND NEW DAY";
      break;
    case hour === 7:
      greet.innerHTML = "EXERCISE MAKES A GREAT MORNING";
      break;
    case hour === 8:
      greet.innerHTML = "WORK HARD";
      break;
    case hour === 9:
      greet.innerHTML = "BUILD YOUR FUTURE";
      break;
    case hour === 10:
      greet.innerHTML = "TIRED ALREADY..?";
      break;
    case hour === 11:
      greet.innerHTML = "DID SOMETHING OR STILL WAITING?";
      break;
    default:
      greet.innerHTML = "GOOD MORNING";
  }
}

else if (hour >= 12 && hour < 17) {
  switch (true) {
    case hour === 12:
      greet.innerHTML = "GOOD AFTERNOON";
      break;
    case hour === 13:
      greet.innerHTML = "WHAT'S ON YOUR MIND?";
      break;
    case hour === 14:
      greet.innerHTML = "WHAT A NICE DAY";
      break;
    case hour === 15:
      greet.innerHTML = "DISCIPLINE IS THE KEY";
      break;
    case hour === 16:
      greet.innerHTML = "TIME IS EVERYTHING";
      break;
    default:
      greet.innerHTML = "BACK TO WORK";
  }
}

else if (hour >= 17 && hour < 21) {
  switch (true) {
    case hour === 17:
      greet.innerHTML = "DAY ALMOST DONE";
      break;
    case hour === 18:
      greet.innerHTML = "KEEP PUSHING";
      break;
    case hour === 19:
      greet.innerHTML = "SMALL STEPS MATTER";
      break;
    case hour === 20:
      greet.innerHTML = "PROGRESS NEVER STOPS";
      break;
    default:
      greet.innerHTML = "GOOD EVENING";
  }
}

else {
  switch (true) {
    case hour === 21:
      greet.innerHTML = "REST BUT DON'T QUIT";
      break;
    case hour === 22:
      greet.innerHTML = "ANOTHER DAY COMPLETED";
      break;
    case hour === 23:
      greet.innerHTML = "DREAM BIG";
      break;
    default:
      greet.innerHTML = "GOOD NIGHT";
  }
}