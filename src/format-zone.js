function formatZone(input) {
    if(input == null || input === ""){
        return "Zone unknown";
    }
    return "Zone " + input;
}
module.exports = formatZone;