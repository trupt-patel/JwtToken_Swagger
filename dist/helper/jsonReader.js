"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfigurationJsonFile = readConfigurationJsonFile;
const fs = require("fs");
const path = require("path");
function readConfigurationJsonFile() {
    try {
        const fullPath = path.join(__dirname, "../data/configuration.json");
        const fileData = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(fileData);
    }
    catch (error) {
        return error;
    }
}
//# sourceMappingURL=jsonReader.js.map