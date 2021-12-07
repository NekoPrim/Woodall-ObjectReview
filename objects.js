console.log('objects.js');

let snow = {
    key: 'value',
    color: 'white',
    wet: true,
    inches: 4,
    accidents: ['100', '694', '23', '35']
};

let stringText = `Today it has already snowed ${snow.inches} inches.`;

snow.isCold = true;

console.log('snow is:', snow);
console.log(`snow is ${snow.color}`);

let buildings = [
    { color: 'brown', isTall: true },
    { color: 'gray', isTall: true },
    { color: 'beige', isTall: false }
];

console.log('buildings is:', buildings);

const penguins = [
    { name: 'Emperor', 
    isCute: true },
    { name: 'Little', 
    isCute: true },
    { name: 'Sea Gull', 
    isCute: false }
];

function checkPenguins(array) {
    let cutePenguins = [];
    for (let i = 0; i < penguins.length; i ++) {
        if (array[i].isCute) {
            cutePenguins.push(array[i].name);
    }
    return cutePenguins;
}

console.log('check cuteness:', checkPenguins(penguins));

function doubleCheckPenguins(array) {
    console.log('in doubleCheckPenguins');
    let IRLcute = [];
    for (let item of array) {
        if (item.isCute) {
            IRLcute.push(item.name);
        }
    }
    return IRLcute;
}

console.log('double check cuteness:', doubleCheckPenguins(penguins));


// construction function is for creating objects, needs first letter capital
function Hat(type, color, size) {
    this.type = type,
    this.color = color,
    this.size = size
};

const averageTopHat = new Hat('top', 'black', 14);
const fedoraHat = new Hat('fedora', 'off-charcoal', 10);
const funnyHat = new Hat('funny', 'rainbow', 18);

console.log(`our fedora is size ${fedoraHat.size}`);

function printHat(hatInput) {
    console.log('hat type is:', hatInput.type);
    console.log('hat color is:', hatInput.color);
};

printHat({type: 'baseball', color: 'blue', size: 12});

printHat(fedora);
