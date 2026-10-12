module.exports = function countActive(alarms) {
    let count = 0;
    for(let i = 0; i < alarms.length; i++) {
        if(alarms[i].status === "active") {
            count++
        };
    };
    return count;
};