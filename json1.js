const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
    .then(response => response.text())
    .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    let catObjects = JSON.parse(catString);
    let female = 0;

    for (let i = 0; i < catObjects.length; i++) {
        let cat = catObjects[i]
            // total number of kittens
        total += cat["kittens"].length;

        // mothers names
        if (i === catObjects.length - 1) {
            motherInfo += `and ${cat.name}.`;
        } else if (i === catObjects.length - 2) {
            motherInfo += `${cat.name} `;
        } else {
            motherInfo += `${cat.name}, `
        }

        // kittens gender
        for (let j = 0; j < cat["kittens"].length; j++) {
            if (cat["kittens"][j]["gender"] === "m") {
                male++;
            } else {
                female++;
            }
        }
    }

    kittenInfo = `Total number of kittens ${total}. Male kittens ${male} and female kittens ${female}.`;
    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);