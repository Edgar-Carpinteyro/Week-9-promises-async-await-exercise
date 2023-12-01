function addStudentToClass(student) {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
    setTimeout(() => {
        if(student.age < 18) {
            reject(`${student.name} is too young for this class.`)
            
        } else {
            resolve(`${student.name} is added to class.`)
        }
    }, randomDelay);
  });
}

async function registerStudent(student) {
  try {
    const result = await addStudentToClass(student);
    console.log(result);
    return result;

  } catch (error) {
    console.log(`${error}`);
  }
}

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

//Promise.all is used to wait for all promises to resolve or reject
Promise.all(students.map(registerStudent))
  .then(() => {
    console.log("All students processed.")
  })
  .catch((error) => {
    console.log(`Error processing students: ${error}`);
  })