const { execSync } = require('child_process');

exports.predictCongestion = (inputData) => {
    const inputJson = JSON.stringify(inputData);
    const result = execSync(`python utils/model.py '${inputJson}'`).toString();
    return JSON.parse(result).prediction; // Ensure your Python script returns JSON
};
