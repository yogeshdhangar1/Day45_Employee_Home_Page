window.addEventListener('DOMContentLoaded', (event) =>{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function () {
    output.textContent = salary.value; 
}); 

const save = () => {
    let employeePayrollData;
    try{
        employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRollData();
    employeePayrollData.name = getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]');
    employeePayrollData.gender = getSelectedValues('[name=gender]');
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let year = getInputValueById('#year');
    let month = parseInt(getInputValueById('#month'))-1;
    let day = getInputValueById('#day');
    employeePayrollData.startDate = new Date(year,month,day);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked)
        selItems.push(item.value);
    });
    return selItems;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("employeePeyrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }

    alert(employeePayrollList.toString());
    localStorage.setItem("employeePeyrollList",JSON.stringify(employeePayrollList));
}