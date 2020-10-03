console.log('Youre in')

let submissionEntries = [];

$(document).ready(readyNow);


function readyNow() {
    $('#submitBtn').on('click', submitInfo);
    $('#submiteeList').on('click', '.removeBtn' , removeSubmission)

    $('#totalSalaries').ready(valueOfSalaries);
} // End of readyNow Function

//////////////////////////////////////////////////////////////////////////////////////


function submitInfo() {
    let newSubmission = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    }
    submissionEntries.push(newSubmission);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    valueOfSalaries();
    displaySubmissions();

} // End of SubmitInfo Function
// Function will activate on click, adding submit info to array and then returning entry onto the DOM



function displaySubmissions() {
    let el = $('#submiteeList');
    el.empty();
    for (submitee of submissionEntries) {
      el.append(`<li>` + submitee.firstName + ` ` + submitee.lastName + ` ` + submitee.iD + ` ` + submitee.title + ` $` + submitee.annualSalary + `<button class='removeBtn'>Remove</button></li>`);
    } // End of for loop, appends new submission to DOM as li's 
  } // End of displaySubmissions function, will submissions to DOM

  function valueOfSalaries() {
    let totalSalariesValue = 0
    for (let i = 0; i < submissionEntries.length; i++) {
      totalSalariesValue += Number(submissionEntries[i].annualSalary);
    } // end of sum of salaries
    console.log('Total Value ' + totalSalariesValue)
    let el = $('#totalSalaries');
    el.empty(totalSalariesValue);
    el.append(`<h3>` + `Total Value of Annual Salaries: $` + totalSalariesValue + `</h3>`);
  }// end of value of salaries

  function removeSubmission() {
      $(this).parent().remove();
      valueOfSalaries();
  } // Removes submitee line from the DOM