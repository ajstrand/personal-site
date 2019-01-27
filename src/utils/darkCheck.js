export function darkCheck() {
   let ls = localStorage.getItem("dark");

    let bool = getBoolean(ls)

    let checked = bool === true && bool !== null ? true : false;
    if (checked) {
       localStorage.setItem("dark", true);
    }
    else if(checked === false || checked === undefined || checked === null){
         localStorage.removeItem("dark"); 
    }
    toggle(checked);

}

function getBoolean(value){
    return value === "true" ? true : false;
}

function addText(v, i) {
    v.classList.add("dark-text-theme");
}

function addBg(v, i) {
    v.classList.add("dark-bg-theme");
}

function removeText(v, i) {
    v.classList.remove("dark-text-theme");
}

function removeBg(v, i) {
    v.classList.remove("dark-bg-theme");
}

export function toggle(checked){
    let t = document.querySelectorAll("p")
    let f = document.querySelectorAll("h1")
    let y = document.querySelectorAll("body")
    let v = document.querySelectorAll("small")
    let p = document.querySelectorAll("footer")

    if (checked) {
        t.forEach(addText)
        f.forEach(addText)
        v.forEach(addText)
        p.forEach(addText)
        y.forEach(addBg)
        localStorage.setItem("dark", true);
    }
    else {
        t.forEach(removeText)
        f.forEach(removeText)
        v.forEach(removeText)
        p.forEach(removeText)
        y.forEach(removeBg)
        localStorage.removeItem("dark"); 
    }

    
}