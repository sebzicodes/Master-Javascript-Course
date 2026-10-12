module.exports = function findFirstOpen(doors) {
    for (const door of doors) {
        if (door.open === true) {
            return door.name;
        }
    };
    return null;

};