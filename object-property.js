const students = [
    {id: 15, name: "shakil Khan"},
    {id: 25, name: "abir Khan"},
    {id: 40, name: "borkot miya"},
    {id: 55, name: "ashik ali"},
    {id: 35, name: "habi miya"}
];

const sName = students.map(s => s.name);
const sId = students.map(x => x.id);
const biggerName = students.filter(s => s.id > 45);
console.log(biggerName);