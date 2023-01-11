// Day47 UC4 - Display Employee Details in Tabular Format using Template Literals
//Day47 UC5 - Ability to view Employee Payroll details in a Tabular Format from JSON Object.
//Day47 UC6- Display Employee Details from Local Storage.
let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    // localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

//Template literal(string literal) ES6 feature
const createInnerHtml=()=>
{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    if(empPayrollList.length==0) {return;}
    // let empPayrollList=createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList)
    {
        innerHtml=`${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt="" ></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${stringifyDate(empPayrollData._startDate)}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${empPayrollData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

// const createEmployeePayrollJSON=()=>
// {
//     let empPayrollListLocal=
//     [
//         {
//             _name:'Narayan Mahadevan',
//             _gender:'male',
//             _department:['Engineering','Finance'],
//             _salary:'500000',
//             _startDate:'29 Oct 2019',
//             _note:'',
//             _id: new Date().getTime(),
//             // _profilePic:'../assets/profile-images/Ellipse -2.png'
//         },
//         {
//             _name:'Amarpa Shashanka Keerthi Kumar',
//             _gender:'female',
//             _department:['sales'],
//             _salary:'400000',
//             _startDate:'29 Oct 2019',
//             _note:'',
//             _id: new Date().getTime(),
//             // _profilePic:'../assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

const getDeptHtml=(deptList)=>
{
    let deptHtml='';
    for(const dept of deptList)
    {
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
//Day48 UC1 -Delete Employee .
const remove=(node) =>
{
    let empPayrollData = empPayrollList.find(empData=> empData._id == node._id);
    if(!empPayrollData) return;
    const index =empPayrollList.map(empData=>empData._id).indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
}
