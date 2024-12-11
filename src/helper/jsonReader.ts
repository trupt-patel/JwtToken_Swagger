import * as fs from 'fs';
import * as path from 'path';

export function readConfigurationJsonFile(){
    try{
        const fullPath = path.join(__dirname, "../data/configuration.json");
        const fileData = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(fileData);
    }
    catch(error){
        return error
    } 
}