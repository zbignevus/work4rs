var express = require('express');
var router = express.Router();

var empCtrl = require("../controllers/employee.js");
var empMgrCtrl = require("../controllers/manager.js");

//MANAGER CONTROLLERS
router.get('/', empMgrCtrl.empListCtrl); // complete
router.get("/empdetails/", empMgrCtrl.empDetailsCtrl); //complete
router.get("/addemployee/", empMgrCtrl.addEmployeeCtrl);
router.get("/empscheduleinfo", empMgrCtrl.empScheduleInfoCtrl)

router.get("/empdetails/notes/new", empMgrCtrl.empDetailsNotesCtrl);
router.get("/empdetails/schedules", empMgrCtrl.empDetailsSchedulesCtrl);
router.get("/empdetails/schedules/new", empMgrCtrl.empAddScheduleCtrl);



//EMPLOYEE CONTROLLERS
router.get("/empclock", empCtrl.empClockCtrl);

module.exports = router;


/*

//EMPLOYEES
Read list of employees     | GET       |   /employees |    
Read a specific employee   | GET       |   /employees |   employeeid
Update a specific employee | PUT       |   /employees |   employeeid   
Delete a specific employee | DELETE    |   /employees |   employeeid

//SCHEDULES
    //MONTHLY
Create a monthly schedule  | POST      |   /employees |   employeeid/month
Read a monthly schedule    | GET       |   /employees |   employeeid/month
Update a monthly schedule  | PUT       |   /employees |   employeeid/month
Delete a monthly schedule  | DELETE    |   /employees |   employeeid/month
    //DAILY
Create a daily schedule    | POST      |   /employees |   employeeid/month/day
Read a daily schedule      | GET       |   /employees |   employeeid/month/day   
Update a daily schedule    | PUT       |   /employees |   employeeid/month/day
Delete a daily schedule    | DELETE    |   /employees |   employeeid/month/day
*/