alert("Welcome to my Grade Calculator")
let username = prompt("Please Enter Your Name")
let english = parseFloat(prompt("Your English Marks"));
let math = parseFloat(prompt("Your Maths Marks"));
let urdu = parseFloat(prompt("Your Urdu Marks"));

let totalMarks = english + math + urdu
let percentage = (totalMarks / 300) * 100

// alert(username + " Your Grade is " + PercentageOfYourSubjects + " %")


// // condition
if (percentage >= 80) {
    alert(username + " Your Grade is 'A+' ")
}
else if (percentage >= 70) {
    alert(username + " Your Grade is 'B'")
}
else if (percentage >= 60) {
    alert(username + " Your Grade is 'C'")
}
else if (percentage >= 50) {
    alert(username + " Your Grade is 'D'")
}
else if (percentage >= 33) {
    alert(username + " Your Grade is 'D'")
}


else {
    alert("Sorry " + username + "you are fail")
}

