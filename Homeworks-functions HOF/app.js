console.log ("Working");

/*There is a JSON file with students. Make a call to the file and get the following data from it:

1.All students with an average grade higher than 3
2.All female student names with an average grade of 5
3.All male student full names who live in Skopje and are over 18 years old
4.The average grades of all female students over the age of 24
5.All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json */


const studentApi="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json ";

const fetchStudentApi=(studentApi)=>{
    fetch (studentApi)
    .then((res)=>res.json ())
.then((data)=> {

//1.
const studentAverageHigherThanThree = data.filter ((student)=>student.averageGrade >3);
console.log(studentAverageHigherThanThree);
//2.
const allFemaleStudentsAverageOfFive = data.filter ((student)=>student.gender==="Female"&& student.averageGrade ===5) ;
console.log(allFemaleStudentsAverageOfFive);
//3.
const allMaleStudentFullNamesLiveSkopjeOver18 = data.filter ((student)=>student.city==="Skopje" && student.age>18)
.map((student)=>`${student.firstName} ${student.lastName}`);
console.log (allMaleStudentFullNamesLiveSkopjeOver18);
//4.
const allFemaleStudentsOverAge24 = data.filter ((student)=>student.gender==="Female" && student.age>=24)
.map((student)=>`${student.firstName} ${student.lastName} ${student.averageGrade}`);
console.log(allFemaleStudentsOverAge24);
//5.
const allMaleStudentsWithNameStartingBAverageGradeOver2 =data.filter ((student)=>student.firstName[0]==="B" && student.averageGrade >2 && student.gender==="Male");
console.log (allMaleStudentsWithNameStartingBAverageGradeOver2);

}) 

}
fetchStudentApi(studentApi);