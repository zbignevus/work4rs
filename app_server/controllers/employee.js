module.exports.empClockCtrl = function(req,res){
    res.render("empClock", {
        title: "Employee Clock-in/Clock-out Page",
        clockStatus: "clocked in",
        empbreak: "Take a break",
        lunch: "Start your lunch"
    })
};