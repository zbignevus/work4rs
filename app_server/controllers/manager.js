
module.exports.empListCtrl = function(req, res){
    res.render('index', { 
        
        title: 'Work4rs', 
        employees: [
            {   
                id: 1,
                name: "Jonathan",
                surname: "Wilkinson",
                email: "someone1!1@someone.com",
                phone: "32154684790",
                occupation: "Manager",
                status: "Active"
            },
            {
                id: 2,
                name: "Vanilia",
                surname: "James",
                email: "loskeroeis@moelsjs.com",
                phone: "98723156498",
                occupation: "Employee",
                status: "Active"
            },
            {
                id: 3,
                name: "Walter",
                surname: "Kleiner",
                email: "lkaskloe@lmpasdma.com",
                phone: "54165489813",
                occupation: "Employee",
                status: "Active"
            },
            {
                id: 4,
                name: "Sam",
                surname: "B.Lowe",
                email: "SamBLowe@jourrapide.com ",
                phone: "2183214654",
                occupation: "Employee",
                status: "Active"
            }
        ]
    });
};

module.exports.empDetailsCtrl = function(req,res){
    res.render("details", {
        title: "Employee Details",
        id: 1,
        name: "Jonathan",
        surname: "Wilkinson",
        email: "someone1!1@someone.com",
        phone: "32154684790",
        address: "133 Love street",
        city: "Vilnius",
        occupation: "Manager",
        status: "Active"
    });
};

module.exports.addEmployeeCtrl = function(req, res){
    res.render("addEmployee", {
        
        title:"Add Employee page",


});
};

module.exports.empDetailsNotesCtrl = function(req, res){
    res.render("detailsNotes", {title: "Work4rs Details notes creation"});
};

module.exports.empDetailsSchedulesCtrl = function(req, res){
    res.render("schedules", {title: "Schedules"});
};

module.exports.empAddScheduleCtrl = function(req, res){
    res.render("addSchedule", {title: "Add new Schedule"});
};

module.exports.empScheduleInfoCtrl = function(req, res){
    res.render("empScheduleInfo", {
        
        title:"Employee Schedule Info page",
        month: "December",
        name: "Jonathan",
        surname: "Wilkinson",
        days:[
            {
                date: 1,
                time: {
                    shiftStart: "08:00",
                    shift1stBreakStart: "10:00",
                    shift1stBreakEnd: "10:14",
                    shiftLunchStart: "12:00",
                    shiftLunchEnd: "12:30",
                    shift2ndBreakStart: "14:32",
                    shift2ndBreakEnd: "14:48",
                    shiftFinish: "16:00",
                    shiftLength: "08:12"
                },
                clockedIn: "08:04",
                clockedOut: "16:01"
            },
            {
                date: 2,
                time: {
                    shiftStart: "08:00",
                    shift1stBreakStart: "10:00",
                    shift1stBreakEnd: "10:14",
                    shiftLunchStart: "12:00",
                    shiftLunchEnd: "12:30",
                    shift2ndBreakStart: "14:32",
                    shift2ndBreakEnd: "14:44",
                    shiftFinish: "16:00",
                    shiftLength: "08:12"
                },
                clockedIn: "08:05",
                clockedOut: "16:05"
            }
        ],
});
}