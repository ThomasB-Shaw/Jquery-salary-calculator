


let submissionEntries = [];

$(document).ready(readyNow);

function readyNow() {
    $('#submitBtn').on('click', submitInfo);
    $('#submiteeSpreadSheet').on('click', '.removeBtn' , removeSubmission)

    $('#totalSalaries').ready(valueOfSalaries);
} // End of readyNow Function

function submitInfo() {
    let newSubmission = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    } // Takes Values of inputs, combines them into an object
    if (newSubmission.firstName === '' || newSubmission.lastName === '' || newSubmission.iD === '' || newSubmission.title === '' || newSubmission.annualSalary === '') {
        console.log('Error, Not All Required Fields Filled in')
        return false
    }  // If all all required fields are not filled in it will now allow the submit function to activate
    else {
    submissionEntries.push(newSubmission);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    valueOfSalaries();
    displaySubmissions();

    } // End of else, activating button
} // End of SubmitInfo Function
// Function will activate on click, adding submit info to array and then returning entry onto the DOM


// Current Issue, Repeats all previous lines
function displaySubmissions() {
    el = $('.infoSubmitNow');
    el.empty();
    for (submitee of submissionEntries) {
      $('#submiteeSpreadSheetBody tr:last').after(`<tr class='infoSubmitNow'>
      <td class ="info">${submitee.firstName}</td>
      <td class ="info">${submitee.lastName}</td>
      <td class ="idInput">${submitee.iD}</td>
      <td class ="info">${submitee.title}</td>
      <td class ="info">${submitee.annualSalary}</td>
      <td><button class='removeBtn'>Remove</button></td>
      </tr>`);
    } // End of for loop, appends new submission to DOM as cells in a table
  } // End of displaySubmissions function, will append new entries after the last TR within the table submissions to DOM

  function valueOfSalaries() {
    let totalSalariesValue = 0
    for (let i = 0; i < submissionEntries.length; i++) {
      totalSalariesValue += Number(submissionEntries[i].annualSalary) / 12;
      totalSalariesValue = Math.ceil(totalSalariesValue);
    } // end of sum of salaries
    console.log('Total Value ' + totalSalariesValue)
    let el = $('#totalMonthlySalary');
    el.empty(totalSalariesValue);
    el.text(`Monthly Costs: $` + totalSalariesValue);
    if (totalSalariesValue <= 20000) {
        el.removeClass('aboveBudget');
    } // End of If checking within budget
    else if (totalSalariesValue > 20000) {
    el.addClass('aboveBudget');
    } // End of If checking above budget
  }// end of value of salaries monthly cost, flipping them red if over $20 K

  function removeSubmission() {
      
      let idInfo = $(this).parent().parent().find('.idInput').text();
      submissionEntries = submissionEntries.filter( submissionEntry => submissionEntry.iD !== idInfo );
      // targets id in the submissionEntries array and returns all objects that dont contain that id
      $(this).parent().parent().remove();
      valueOfSalaries();
  } // End of removeSubmission Function.  Removes submitee line from the DOM as well as the main array.  Then updates the Monthly cost


