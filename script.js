let students  = [
{id: 1, name: 'Markiewap', program: 'Bachelor of Science Criminology Major in Homikinanay'},
{id: 2, name: 'Generie', program: 'Bachelor of Science Education Major in Gin Bilog'},
{id: 3, name: 'Jennie yap', program: 'Bachelor of Science Engenireeng Technology Major in GSM Blue'},
{id: 4, name: 'Brent', program: 'Bachelor of Science Arts Communication Major in Babaero'},
{id: 5, name: 'Will You', program: 'Bachelor of Science International Relation Major in Tambay ako'},
];

const creatListItem = (student) => {
    //create element 
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const button = document.createElement('button');

//add value 
h2.innerText = student.name
p.innerText =student.program;
button.innerText = 'Delete';
button.addEventListener('click',() =>{
   const newStudents = students.filter((s) => s.id !== student.id)
    students = newStudents;
    displayList();

});

   

//add class
article.classList.add('list-item');

//insert

article.append(h2);
article.append(p);
article.append(button);

return article;

}


const list = document.querySelector('#studentList');

const displayList = () =>{
    list.replaceChildren();
    const studentList = students.map((s) => creatListItem(s));
    studentList.forEach((s) => list.append(s));

}
displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = nameField.value;
    const program = programField.value;

    const newStudent = {
        id: students.length + 1,
        name,
        program

    }

    students.push(newStudent);
    nameField.value = '';
    programField.value = '';
    displayList();



});
