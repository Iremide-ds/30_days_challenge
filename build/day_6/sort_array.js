"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortAsc = (arr) => {
    if (arr.length < 2) {
        return [];
    }
    return arr.sort((a, b) => {
        if (typeof a == "number" && typeof b == "number") {
            return a - b;
        }
        else {
            return a > b ? 1 : -1;
        }
    });
};
exports.default = sortAsc;
