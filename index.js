const { onboardDeveloper, registerProject, receiveTokens } = require('tea-demo-arsen');

console.log("Tea Brewing Tutorials Project Initialization...");

const developerInfo = {
    name: "BrewMaster Leo",
    email: "leo@teabrewtutorials.com"
};

const projectInfo = {
    name: "Ultimate Tea Brewing Tutorials",
    repositoryUrl: "https://github.com/leobrew/ultimate-tea-brewing"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("Brewing Tutorials Project setup completed.");
