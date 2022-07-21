
//import {format} from 'casual-duration';
const casualDuration = require("./format.js");
const format = casualDuration.format;


test("up to a minute", () => {
    expect(format(7.6 * 1000, true)).toBe("7s");
    expect(format(47.345 * 1000)).toBe("47 seconds");
});

test("more than a minute", () => {
    expect(format(65 * 1000)).toBe("1 minute")
    expect(format(7.6 * 60 * 1000, true)).toBe("7m");
    expect(format(47.345 * 60 * 1000)).toBe("47 minutes");
});

test("hour or more", () => {
    expect(format(60 * 60 * 1000)).toBe("1 hour");
    expect(format(3.5 * 60 * 60 * 1000, true)).toBe("3h");
});
