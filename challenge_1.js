function gradeCalculator() {
    let input = prompt("Enter student's marks");
  
    let marks = parseFloat(input);

    //test it out (remove the comments from line 7)
    //let marks = 60;
  
      if (marks > 79) {
        console.log("A");
      } else if (marks >= 60 && marks <= 79) {
        console.log("B");
      } else if (marks >= 50 && marks <= 59) {
        console.log("C");
      } else if (marks >= 40 && marks <= 49) {
        console.log("D");
      } else {
        console.log("E");
      }
    }

//call the function which grades the marks
gradeCalculator();

//console.log(gradeCalculator);