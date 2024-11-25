const pwI = document.querySelector(".password");
const cpwI = document.querySelector(".confirmPW");
const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    const pw = pwI.value;
    const cpw = cpwI.value;
    console.log(`pw = ${pw}, cpw = ${cpw}`);
    if(pw != cpw || pw === "" || cpwI === "")
    {
        pwI.setAttribute("style", "border-color: red;")
        cpwI.setAttribute("style", "border-color: red;")
        return console.log(false);
    }
    else
    {
        pwI.setAttribute("style", "border-color: green;")
        cpwI.setAttribute("style", "border-color: green;")
        return console.log(true);
    }
})