console.log ("Working")

//Academy
//name - string
//students - array of Students
//subjects - array of Subjects
//start - Date when it starts
//end - Date when it ends
//numberOfClasses - number of subjects multipled by 10, not settable*
//printStudents - method that prints all students in console
//printSubjects - method that prints all subjects in console


  class Academy {
    constructor(name, start, end) {
        this.name = name;
        this.students = [];
        this.subjects = [];
        this.start = start;
        this.end = end;
        this.numberOfClasses=this.subjects.length * 10;
        
    }

    //get numberOfClasses() {
    //return this.subjects.length * 10; пробав и со овој начин
    
    //}
    printStudents() {
        console.log("Students in " + this.name + ":");
        this.students.forEach(student => 
        console.log(student.firstName + " " + student.lastName));
    }

    printSubjects() {
        console.log("Subjects in " + this.name + ":");
        this.subjects.forEach(subject => console.log(subject.title));
    }
}

//Subject
//title - string
//numberOfClasses - default 10, not settable*
//isElective - boolean
//academy - Academy object
//students - array of Students
//overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.
  
class Subject {
    constructor(title, isElective, academy) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = [];
    }

    overrideClasses(number) {
        if (number >= 3) {
            this.numberOfClasses = number;
        } else {
            console.error("Number can't be smaller than 3.");
        
        }
    }
}

//Student
//firstName - string
//lastName - string
//age - number
//completedSubjects - emptyArray as default, not settable*
//academy - null as default, not settable*
//currentSubject - null as default, not settable*
//startAcademy - method that accepts Academy object that it sets to the Academy property of the student
//startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this); 
    }

    startSubject(subject) {
        if (this.academy && this.academy.subjects.includes(subject)) 
        {
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;
            subject.students.push(this); 
        } else {
        
            console.error("The student hasn`t started an academy.Subject does not exist in the academy.");
        }
    }
}


const academy1 = new Academy("SEDC Academy", new Date(2023,20,10,17,30), new Date(2024,20,10,20,30));

const subject1 = new Subject("JavaScript ", true, academy1);
const subject2 = new Subject("HTML", true, academy1);
const subject3 = new Subject("CSS", true, academy1);
const subject4 = new Subject("Node.JS", true, academy1);
const subject5 = new Subject(".NET", false, academy1);


const student1 = new Student("Stevan", "Tuturevski", 20);
const student2 = new Student("Olgica", "Cuckova", 30);
const student3 = new Student("Borce", "Borisovski", 31);
const student4 = new Student("Hristina", "Bozinovska", 31);

academy1.subjects.push(subject1, subject2,subject3,subject4,subject5);

student1.startAcademy(academy1);
student2.startAcademy(academy1);
student3.startAcademy(academy1);
student4.startAcademy(academy1);

student1.startSubject(subject1,subject2,subject3,subject4,subject5);
student2.startSubject(subject1,subject2,subject3,subject4,subject5);
student3.startSubject(subject1,subject2,subject3,subject4,subject5);
student3.startSubject(subject1,subject2,subject3,subject4,subject5);
student4.startSubject(subject1,subject2,subject3,subject4,subject5);

academy1.printStudents();
academy1.printSubjects();

console.log(student1,student2,student3,student4);