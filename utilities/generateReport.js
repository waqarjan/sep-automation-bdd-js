import reporter from "cucumber-html-reporter";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Builds a polished HTML report from the cucumber JSON output using cucumber-html-reporter.
 */
const options = {
  theme: "bootstrap",
  jsonFile: path.join(__dirname, "../reports/cucumber-report.json"),
  output: path.join(__dirname, "../reports/cucumber-html-reporter.html"),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": process.env.npm_package_version,
    "Test Environment": process.env.TEST_ENV || "QA",
    Platform: process.platform,
  },
};

reporter.generate(options);
