// Day46 UC1-Modify Employee Payroll class with new Attributes and Getters and Setters .
class EmployeePayrollData
{
    get id()    { return this._id }
    set id(id)
    {
        this._id=id;
    }
    get name()  { return this._name; }
    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }
    get profilePic()    { return this._profilePic; }
    set profilePic(profilePic)
    {
        this._profilePic=profilePic
    }
    get gender()    { return this._gender; }
    set gender(gender)
    {
        this._gender=gender;
    }
    get department()    { return this._department; }
    set department(department)
    {
        this._department=department;
    }
    get salary()    { return this._salary;}
    set salary(salary)
    {
        this._salary=salary;
    }
    get note()  {return this._note;}
    set note(note)
    {
        this._note=note;
    }
    get startDate() {   return this._startDate; }
    set startDate(startDate)
    {
        this._startDate=startDate;
    }
    toString()
    {
        const option = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
        this.startDate.toLocaleDateString("en-GB", option);
        return "Id: " + this.id +", Name: " + this.name +", Gender: " + this.gender  +", ProfilePic: "+ this.profilePic +
             ", Department: " + this.department+ ", Salary: " + this.salary+", Start Date: " + empDate +", Note: "+this.note;
    }
}