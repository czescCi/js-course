let bandInfo;

// Put your code here

const band = {
    name: 'Leopard',
    nationality: 'Wild',
    genre: 'Hard',
    members: 2,
    formed: 2021,
    split: false,
    albums: {
        name: ['Leo', 'Pard', 'Wild Child'],
        relased: [2020, 1990, 2021]
    }
};

bandInfo = `My favourie band is ${band.name} thera are form ${band.nationality}. They're playing ${band.genre} and have ${band.members} members. They formed in ${band.formed} and ${band.split}. Their albums are ${band.albums.name[0]} from ${band.albums.relased[0]}, ${band.albums.name[1]} from ${band.albums.relased[1]} and ${band.albums.name[2]} from ${band.albums.relased[2]}.`

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);