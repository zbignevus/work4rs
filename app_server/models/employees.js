var mongoose = require("mongoose");

var dailySchedulesSchema = new mongoose.Schema({
    day: Number,
    dayStart: Number,
    firstBreakStart: Number,
    firstBreakEnd: Number,
    lunchStart: Number,
    lunchEnd: Number,
    secondBreakStart: Number,
    secondBreakEnd: Number,
    dayEnd: Number,
    workDuration: Number
});

var monthlyScheduleSchema = new mongoose.Schema({
    month: {type: Number, required: true },
    dailySchedules: [dailySchedulesSchema]
});

var employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    occupation: {type: String, required: true},
    status: {type: Boolean, required: true},
    monthlySchedule: [monthlyScheduleSchema]
    
});


mongoose.model('Employee', employeeSchema);

/*

Employees {
    name
    surname
    email
    phone
    occupation
    status
    schedules

}

Monthly Schedule {
    month
    days 
}

Daily Schedule {
    day
    dayStart
    firstBreak
    lunch
    secondBreak
    dayEnd
    workDuration
}


//Example save

db.employees.save({
    name: "Eric",
    surname: "K. Farrell",
    email: "EricKFarrell@dayrep.com",
    phone: "864-506-7281",
    occupation: "Employee",
    status: true,
    monthlySchedule: [
        {
            month: 12,
            dailySchedules: [
                {
                    day: 1,
                    dayStart: 480,
                    firstBreakStart: 600,
                    firstBreakEnd: 615,
                    lunchStart: 720,
                    lunchEnd: 750,
                    secondBreakStart: 870,
                    secondBreakEnd: 885,
                    dayEnd: 1020,
                    workDuration: 480
                },
                {
                    day: 2,
                    dayStart: 540,
                    firstBreakStart: 630,
                    firstBreakEnd: 645,
                    lunchStart: 750,
                    lunchEnd: 780,
                    secondBreakStart: 870,
                    secondBreakEnd: 885,
                    dayEnd: 1050,
                    workDuration: 480
                }
            ]
        }
    ]
})


*/
