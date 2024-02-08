console.log ("Working");

/*Requirements
Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

After you have the data display the following informations in the HTML

ONLY USE HIGHER ORDER FUNCTIONS
USE AYSNC/AWAIT
DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA
1.Show the average age and average grade of all students combined
2.Show the number of students that are over 60 and the number of students that are under 30 years old
3.Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
4.Find the student named Arthur Cadore and display all of his information
5.Find the oldest and youngest student and display their information on the screen
6.Show a list of the full names of students that have a last name longer than 8 characters
7.Show a list of the top 10 best students by average grade
8.Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)*/


const fetchStudents = async () => {
    try {
      const res = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
      const data = await res.json();
      console.log(data);
  
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error students");
    }
  };
  
  const allStudents=async()=>{
    try{
const students=await fetchStudents();


//1.
const calculateAverageAgeandGrade=(arr,key)=>arr.reduce((acc,obj)=>acc+obj[key],0)/arr.length;//Cika GOOGLE
const averageAge=calculateAverageAgeandGrade(students,"age");
console.log (averageAge);

const averageGrade=calculateAverageAgeandGrade(students,"averageGrade");
console.log(averageGrade);
//2.
const studentsOver60=students.filter((students)=>students.age>60).length;
console.log(studentsOver60);

const studentsUnder30=students.filter((students)=>students.age<30).length;
console.log(studentsUnder30);
//3.
const studentsOver30AndAverageGrade4AndAbove=students.filter((students)=>students.age>30 && students.averageGrade>=4);
console.log(studentsOver30AndAverageGrade4AndAbove);
//4.
const studentArthurCardore=students.filter((students)=>students.firstName==="Arthur" && students.lastName==="Cadore").map((students)=>`First Name:${students.firstName}, Last Name:${students.lastName}, Gender:${students.gender}, Age:${students.age}, E-mail: ${students.email}, City:${students.city}, Average grade:${students.averageGrade}`).join("");
console.log(studentArthurCardore);

const studentsCopy = students.map((students) => students);
    studentsCopy.sort((a, b) => b.age - a.age);
    console.log(studentsCopy);
//5.
    const oldestStudent = studentsCopy[0];
    console.log(oldestStudent);
    const youngestStudent = studentsCopy[studentsCopy.length - 1];
    console.log(youngestStudent);
//6.
    const fullNamesOfStudentsWithLastNameLongerThan8Characters = students
      .filter((students) => students.lastName.length > 8)
      .map((students) => `${students.firstName} ${students.lastName}`);
    console.log(fullNamesOfStudentsWithLastNameLongerThan8Characters);
//7.
    const topTenBestStudentsByAverageGrade = [...students]
      .sort((a, b) => b.averageGrade - a.averageGrade)
      .slice(0, 10)
      .map((student) => `${student.firstName} ${student.lastName}`);

    console.log(topTenBestStudentsByAverageGrade);
//8.
    const averageGradeOfOne = students.some((student) => student.averageGrade === 1);
    console.log(averageGradeOfOne);
    const AllAdultsAbove18 = students.every((student) => student.age > 18);
    console.log(AllAdultsAbove18);

const section=document.querySelector(".studentscontainer");

section.innerHTML=

`<h2>Average age and average grade of all students combined</h2>
<p>Average age of all students is:${averageAge}</p>
<p>Average grade of all students is:${averageGrade}</p>
<h2>Number of students that are over 60 and the number of students that are under 30 years old</h2>
<p>Number of students that are over 60 years old is:${studentsOver60}</p>
<p>Number of students that are under 30 years old is:${studentsUnder30}</p>
<h2>The students that are over 30 and have an average grade of 4 and above</h2>
<ul>${studentsOver30AndAverageGrade4AndAbove.map((students)=>`<li>${students.firstName} ${students.lastName} from city: ${students.city}</li>`).join("")} </ul>
<h2>Student named Arthur Cadore</h2>
<p><b>Information about student Arthur Cadore is ${studentArthurCardore}</b></p>
<h2>Oldest students</h2>
<p> The oldest student is: ${oldestStudent.firstName} ${
  oldestStudent.lastName
} - ${oldestStudent.age} years old with average Grade ${
  oldestStudent.averageGrade
}</p>
<h2>Youngest students</h2>
     <p> The youngest student is ${youngestStudent.firstName} ${
  youngestStudent.lastName
} - ${youngestStudent.age} years old with average Grade ${
  youngestStudent.averageGrade
}</p>
     <h2> List of students with last name longer than 8 characters:</h2> 
      ${fullNamesOfStudentsWithLastNameLongerThan8Characters.join("<li></li>")}
     <h3>Top 10 Students by Average Grade:</h3>
      ${topTenBestStudentsByAverageGrade.join("<li></li>")}
      <p>Some students have a grade of 1: ${
        averageGradeOfOne ? "Yes" : "No"}
      </p> //Ni pomogna GOOGLE
      <p>All students are adults: ${AllAdultsAbove18 ? "Yes" : "No"}</p>

`

    }catch(error){
        throw new Error ("Error")

    }
  };
  allStudents();