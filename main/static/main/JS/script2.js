let teamsNameses = document.getElementById("teamsNames"),
    addTeamBtn = document.getElementById("addTeamBtn"),
    teamsInfo = document.querySelectorAll(".teamsInfo"),
    deleteBtn = document.querySelectorAll(".deleteBtn"),
    teamName = document.querySelectorAll(".teamName");


addTeamBtn.addEventListener("click", () => {
    if (teamsNameses.childElementCount < 6) {
        let newTeam = document.createElement("div"),
            newTeamNum = document.createElement("span"),
            newTeamName = document.createElement("input"),
            newDeleteBtn = document.createElement("button");

        newTeam.classList.add("teamsInfo");
        newTeamNum.classList.add("teamNum");
        newTeamNum.textContent = teamsNameses.childElementCount;
        newTeamName.classList.add("teamName");
        newTeamName.setAttribute("type", "type");
        newTeamName.setAttribute("name", "name");
        newTeamName.setAttribute("placeholder", "Название команды");
        newDeleteBtn.classList.add("deleteBtn");
        newDeleteBtn.textContent = "Delete";

        newTeam.appendChild(newTeamNum);
        newTeam.appendChild(newTeamName);
        newTeam.appendChild(newDeleteBtn);

        addTeamBtn.remove()
        teamsNameses.appendChild(newTeam);
        teamsNameses.appendChild(addTeamBtn);

    } else {
        addTeamBtn.setAttribute("disabled", "disabled");
    }
    names();
})

function names() {
    for (let i = 0; i < teamsNameses.childElementCount - 1; i++) {
        teamsNameses.children[i].children[2].addEventListener("click", () => {
            if (teamsNameses.children[i] == addTeamBtn) {

            } else {
                teamsNameses.children[i].remove()
            }
            if (teamsNameses.childElementCount - 1 < 6) {
                addTeamBtn.removeAttribute("disabled")
            }
        })
    }
}