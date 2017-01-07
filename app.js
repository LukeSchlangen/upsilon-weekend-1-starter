
var totalMonthlySalary = 0;

$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    updateTotalSalary(formData.employeeSalary);

    appendDom(formData);

    clearForm();
  });


  $('tbody').on('click', '.deleteButton', function(){
    updateTotalSalary("-" + Number($(this).parent().prev().text()));
    $(this).parent().parent().remove();
  });

});

function appendDom(emp) {
  var $emp = $('<tr></tr>'); // create a tr jQuery object

  $emp.append('<td>' + emp.employeeFirstName + '</td>'); // add our employee data
  $emp.append('<td>' + emp.employeeLastName + '</td>');
  $emp.append('<td>' + emp.employeeIdNumber + '</td>');
  $emp.append('<td>' + emp.employeeTitle + '</td>');
  $emp.append('<td>' + emp.employeeSalary + '</td>');
  $emp.append('<td><button class="deleteButton">Delete</button></td>')

  $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}

function updateTotalSalary(newEmployeeSalary){
  console.log(newEmployeeSalary);
  totalMonthlySalary += Number(newEmployeeSalary)/12;
  $('#totalSalary').text(totalMonthlySalary);
}
