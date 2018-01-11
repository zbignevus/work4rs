var mongoose = require("mongoose");
var Emp = mongoose.model("Employee");

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}

//EMPLOYEE LIST CONTROLLERS
module.exports.empList = function(req, res){ 
    /*
    1. Write code for data retrieval
    2. Add error catchers
    */ 
    Emp
        .find()
        .select("-monthlySchedule")
        .exec(function(err, employees){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            } else if (!employees){
                sendJsonResponse(res, 404, {"message": "Employee list is empty..."});
                return;
            }
            sendJsonResponse(res, 200, employees);
        });
        
};
module.exports.empCreate = function(req, res){
    Emp
        .create({
                _id: req.body._id,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: req.body.phone,
                occupation: req.body.occupation,
                status: req.body.status        
        }, function(err, employee){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            } else {
                sendJsonResponse(res, 201, employee);
            }
        });
};
module.exports.empReadOne = function(req, res){
    var employeeid = req.params.employeeid;
    Emp
        .findById(employeeid)
        .exec(function(err, employee){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            } else if(!employee){
                sendJsonResponse(res, 404, {"message": "No employee with that id found"});
                return;
            }
            sendJsonResponse(res, 200, employee);
        });
};
module.exports.empUpdateOne = function(req, res){
    
    Emp
        .updateOne(
        {"_id": req.params.employeeid },
        {$set:{"name": req.body.name,"email":req.body.email,"phone":req.body.phone,"occupation": req.body.occupation, "status": req.body.status}
        },
        {upsert: true}

        )
        .exec(function(err, employee){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            }
            sendJsonResponse(res, 200, employee);
        });
    
};
module.exports.empDeleteOne = function(req, res){
     Emp
        .deleteOne(
        {"_id": req.params.employeeid}
        )
        .exec(function(err, employee){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            }
            sendJsonResponse(res, 200, {"message": "Successfully deleted employee entry."});
        });
};

//MONTHLY SCHEDULE LIST CONTROLLERS
module.exports.empMonthCreate = function(req, res){   
    var employeeid = req.params.employeeid;
    var monthParam = req.params.month;
    Emp
        .update({_id: employeeid},{ $push: { monthlySchedule: {month:monthParam} } }, {$upsert:true})
        .exec(function(err, month){
        if(err){
            sendJsonResponse(res, 400, err);
            return;
        }
        sendJsonResponse(res, 201, {"message": "Month successfully added."})
    })
};
module.exports.empMonthReadOne = function(req, res){  
    var monthParam = req.params.month;
    var employeeid = req.params.employeeid;

    Emp
        .find({_id: employeeid}, {monthlySchedule: {$elemMatch:{month: monthParam}}})
        .select("name surname monthlySchedule.month")
        .exec(function(err, monthResult){
            if(monthResult && monthResult.length > 0){
                sendJsonResponse(res, 200, monthResult);
            } else if(err){
                sendJsonResponse(res, 400, err);
                return;
            } else {
                sendJsonResponse(res, 404, {"message": "Data for requested month not found."});
                return;
            }
        });
        
};
module.exports.empMonthUpdateOne = function(req, res){   
  //Irrelevant, all updates done through daily Schedules
    /*
    Emp.update({_id: employeeid, monthlySchedule: {$elemMatch:{ month: monthParam }} }, {$set: {"monthlySchedule.$.month": req.body.month}} )
    */
};
module.exports.empMonthDeleteOne = function(req, res){  
    var employeeid = req.params.employeeid;
    var monthParam = req.params.month;
    Emp
        .update({"_id": employeeid, "monthlySchedule.month": monthParam}, {$unset: {"monthlySchedule.$":""}})
        .exec(function(err){
        if(err){
            sendJsonResponse(res, 400, err);
            return;
        }
        sendJsonResponse(res, 201, {"message": "Month successfully deleted"});
    })                                                                          
};

//DAILY SCHEDULES CONTROLLERS
module.exports.empDayCreate = function(req,res){  
    
};
module.exports.empDayReadOne = function(req, res){
    var monthParam = req.params.month;
    var employeeid = req.params.employeeid;
    var dayParam = req.params.day;
    
    /*
        Emp.aggregate()
            .match({"_id": employeeid})
            .unwind(monthlySchedule)
            .unwind("monthlySchedule.dailySchedules")
            .match({'monthlySchedule.month': 12}, {'monthlySchedule.dailySchedules.day': 1})
    */
         Emp.aggregate([
        {$match: {"_id": mongoose.Types.ObjectId(employeeid)}},
        {$unwind:'$monthlySchedule'}, 
        {$unwind:'$monthlySchedule.dailySchedules'}, 
        {$match:{ $and:[ {'monthlySchedule.month': 12}, {'monthlySchedule.dailySchedules.day': 1} ] } }
        ])

        .exec(function(err, dailySchedule){
            if(dailySchedule){
                sendJsonResponse(res, 200, dailySchedule);
            } else if(err){
                sendJsonResponse(res, 400, err);
                return;
            } else {
                sendJsonResponse(res, 404, {"message": "This day has no schedules added."});
                return;
            }
            
        });
        
};
module.exports.empDayUpdateOne = function(req, res){
};
module.exports.empDayDeleteOne = function(req, res){
};
