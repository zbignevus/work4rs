var express = require("express");
var router = express.Router();

//var ctrlEmployee = require("../controllers/employee");
var ctrlManager = require("../controllers/manager");

//EMPLOYEE LIST
router.get("/employees", ctrlManager.empList);
router.post("/employees", ctrlManager.empCreate);
router.get("/employees/:employeeid", ctrlManager.empReadOne);
router.put("/employees/:employeeid", ctrlManager.empUpdateOne);
router.delete("/employees/:employeeid", ctrlManager.empDeleteOne);

//MONTHLY SCHEDULE LIST
router.post("/employees/:employeeid/:month", ctrlManager.empMonthCreate);
router.get("/employees/:employeeid/:month", ctrlManager.empMonthReadOne);
router.put("/employees/:employeeid/:month", ctrlManager.empMonthUpdateOne);
router.delete("/employees/:employeeid/:month", ctrlManager.empMonthDeleteOne);

//DAILY SCHEDULE LIST
router.post("/employees/:employeeid/:month/:day", ctrlManager.empDayCreate);
router.get("/employees/:employeeid/:month/:day", ctrlManager.empDayReadOne);
router.put("/employees/:employeeid/:month/:day", ctrlManager.empDayUpdateOne);
router.delete("/employees/:employeeid/:month/:day", ctrlManager.empDayDeleteOne);



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


//CLOCK-IN/OUT INFO??

*/