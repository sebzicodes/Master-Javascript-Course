const makeBadge = (name, level) => ({
    name,
    level: (typeof(level) === "number" && level > 0) ? level: 1
})
module.exports = makeBadge;