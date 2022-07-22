
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

test("hours", () => {
    expect(format(60 * 60 * 1000)).toBe("1 hour");
    expect(format(3.5 * 60 * 60 * 1000, true)).toBe("3h");
});

test("days", () => {
    expect(format(25 * 60 * 60 * 1000)).toBe("1 day");
    expect(format(3.5 * 24 * 60 * 60 * 1000, true)).toBe("3d");
});

test("weeks", () => {
    expect(format(7.3 * 24 * 60 * 60 * 1000)).toBe("1 week");
    expect(format(3.5 * 7 * 24 * 60 * 60 * 1000, true)).toBe("3w");
});

test("months", () => {
    expect(format(32 * 24 * 60 * 60 * 1000)).toBe("1 month");
    expect(format(3.5 * 30 * 24 * 60 * 60 * 1000, true)).toBe("3mo");
});

