const fs = require("fs");
const filePath = "sample1.json";
function createStudent(newStudent) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    json.push(newStudent);
    fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(" Students added successfully!");
      }
    });
  });
}

function readStudents() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    console.log("Students List:", json);
  });
}

function updateStudent(rollNo, updatedData) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error in reading:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.map((student) =>
      student.rollNo === rollNo ? { ...student, ...updatedData } : student
    );
    fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), (err) => {
      if (err) {
        console.error("Error in writing:", err);
      } else {
        console.log("Student updated successfully!");
      }
    });
  });
}

function deleteStudent(rollNo) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.filter((student) => student.rollNo !== rollNo);
    fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(`Student with rollno ${rollNo} deleted successfully!`);
      }
    });
  });
}


createStudent({
  studentName: "Latha",
  rollNo: 110,
  dob: "2005-12-10",
  dept: "EEE",
});

readStudents();

updateStudent(125, { studentName: "Gokul", dept: "CSE" });

deleteStudent(104);