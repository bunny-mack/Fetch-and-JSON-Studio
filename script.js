// TODO: add code here
/* window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            //const container = document.getElementById("container");
            for (let i = 0; i<json.length;  i++) {
                //if (json[i].hoursInSpace ) {
                document.getElementById("container").innerHTML += `
                <div class="astronaut">
                <div class="bio">
                   <h3>${json[i].firstName} ${json[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${json[i].hoursInSpace}</li>
                      <li>Active: ${json[i].active}</li>
                      <li>Skills: ${json[i].skills.join(", ")}</li>
                   </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>
                `;
                //}
            }

        });
    });
}); */


window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        return response.json();
    })
    .then((astronautJson) => {
        const container = document.querySelector("#container");
        const count = document.getElementById("count");
        count.innerHTML = `Number of Astronauts: ${astronautJson.length}`;
        let astronauts = "";
        const organizedAstronauts = astronautJson.sort(
            (a, b) => b.hoursInSpace - a.hoursInSpace);
        for (astronaut of astronautJson) {
            if (astronaut.active) {
            astronauts +=
            `
                <div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li style='color: green' >Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(', ')}</li>
                   </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
        } else {
            astronauts +=
            `
                <div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(', ')}</li>
                   </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
        }
        }
        container.innerHTML = astronauts;
    });
});