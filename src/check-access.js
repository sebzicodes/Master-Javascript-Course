module.exports = function checkAccess(badge, door) {
    if(badge.valid === true && badge.revoked === false && door.lockdown === false) {
        return "GRANT"
    } else {
        return "DENY"
    };
};