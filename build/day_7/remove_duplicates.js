"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDups = (arr) => {
    if (arr.length == 1) {
        return arr;
    }
    else {
        let cleanArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (cleanArr.includes(arr[i])) {
                continue;
            }
            else {
                cleanArr.push(arr[i]);
            }
        }
        return cleanArr;
    }
};
exports.default = removeDups;
