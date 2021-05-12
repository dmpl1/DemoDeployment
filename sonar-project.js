const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "${env.sonarDeploymentDemo1Token}",
    options: {
      "sonar.sources": ".",
      "sonar.tests": "./src/App.test.js",
      "sonar.test.inclusions": "./src/*.test.js",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
      "sonar.qualitygate.wait": true,
      "sonar.qualitygate.timeout": 60000
    },
  },
  () => {},
);