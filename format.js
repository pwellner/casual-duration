
function format(ageMs, short) {
    let ageSec = ageMs / 1000;
    let ageMin = ageSec / 60
    let ageHour = ageMin / 60;
    let ageDay = ageHour / 24;
    let ageWeek = ageDay / 7;
    let ageMonth = ageDay / 30;

    // Round up when close to next number
    ageSec = Math.floor(ageSec + .1);
    ageMin = Math.floor(ageMin + .1);
    ageHour = Math.floor(ageHour + .1);
    ageDay = Math.floor(ageDay + .1);
    ageWeek = Math.floor(ageWeek + .1);
    ageMonth = Math.floor(ageMonth + .1);

    if (ageMonth) {
        if (short) {
            return ageMonth + "mo";
        }
        return (ageMonth == 1) ? "1 month" : (ageMonth + " months");
    }
    if (ageWeek) {
        if (short) {
            return ageWeek + "w";
        }
        return (ageWeek == 1) ? "1 week" : (ageWeek + " weeks");
    }
    if (ageDay) {
        if (short) {
            return ageDay + "d";
        }
        return (ageDay == 1) ? "1 day" : (ageDay + " days");
    }
    if (ageHour) {
        if (short) {
            return ageHour + "h";
        }
        return (ageHour == 1) ? "1 hour" : (ageHour + " hours");
    }
    if (ageMin) {
        if (short) {
            return ageMin + "m";
        }
        return (ageMin == 1) ? "1 minute" : (ageMin + " minutes");
    }
    if (ageSec) {
        if (short) {
            return ageSec + "s";
        }
        return (ageSec == 1) ? "1 second" : (ageSec + " seconds");
    }

}


module.exports.format = format;
