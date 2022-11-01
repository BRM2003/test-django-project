let setMenuNav = document.querySelectorAll(".setMenuNav"),
    setMenuNavText = document.querySelectorAll(".setMenuNav p"),
    teamsNames = document.getElementById("teamsNames"),
    autor = document.getElementById("autor"),
    Menu = document.getElementById("menu");

let x = 0;
setChoose(x)
for (let i = 0; i < setMenuNav.length; i++) {
    setMenuNav[i].addEventListener("click", () => {
        setChoose(i)
    })
}

function setChoose(b) {
    let j = 0
    while (j < setMenuNav.length) {
        setMenuNav[j++].style.backgroundPositionX = "0%";
    }
    for (let a = 0; a < setMenuNavText.length; a++) {
        setMenuNavText[a].style.color = "white"
    }
    setMenuNav[b].style.backgroundPositionX = "99.8%";
    setMenuNavText[b].style.color = "black";

    if (b == 0) {
        setTimeout(() => { teamsNames.style.display = 'block' }, 1000)
        setTimeout(() => {
            teamsNames.style.top = '0';
            teamsNames.style.opacity = "1";
        }, 1500)
    } else {
        teamsNames.style.top = '-50px';
        teamsNames.style.opacity = "0";
        setTimeout(() => { teamsNames.style.display = 'none' }, 1000)
    }

    if (b == 1) {
        setTimeout(() => { autor.style.display = 'block' }, 1000)
        setTimeout(() => {
            autor.style.top = '0';
            autor.style.opacity = "1";
        }, 1500)
    } else {
        autor.style.top = '-50px';
        autor.style.opacity = "0";
        setTimeout(() => { autor.style.display = 'none' }, 1000)
    }
}