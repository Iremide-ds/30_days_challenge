"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_all_elements_1 = __importDefault(require("../day_8/sum_all_elements"));
const findAverage = (arr) => {
    let sum = (0, sum_all_elements_1.default)(arr);
    return sum / arr.length;
};
exports.default = findAverage;
