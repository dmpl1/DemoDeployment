const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "9a7464b4f368e4cee43bef4bdc7b414c2aa70118",
    options: {
      "sonar.sources": "./src",
      "sonar.tests": "./src/App.test.js",
      "sonar.test.inclusions": "./src/*.test.js",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {},
);