"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seriesSchema = void 0;
const mongoose = require('mongoose');
exports.usersSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
});