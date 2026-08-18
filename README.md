# Self Enrollment Portal — Playwright BDD Automation

A JavaScript test automation portfolio project based on hands-on work completed during Cydeo's JavaScript and Playwright Automation with AI training program. The project demonstrates browser automation and BDD scenario design for an enrollment and checkout workflow using Playwright and Cucumber.js.

> **Project status:** The original Cydeo QA application used for this training project has been retired and is no longer publicly available. This repository is presented as a code and framework portfolio artifact rather than a currently runnable live demo. Framework structure can still be validated with Cucumber's dry-run mode.

## What This Project Demonstrates

- Playwright browser automation with JavaScript
- Cucumber BDD and Gherkin scenarios
- Page Object Model organization
- Reusable hooks and browser utilities
- Externalized JSON test data
- Positive and negative checkout validation
- Payment-form validation scenarios
- Failure screenshots and Cucumber reporting
- Environment-variable based configuration
- GitHub Actions framework validation

## Automated Coverage

The original suite covered:

- Product landing-page content and footer validation
- Checkout stepper state and navigation
- Personal-information field validation
- Required-field behavior
- Product price, program dates, and refund information
- Payment-plan selection and switching
- Payment-plan pricing details
- Navigation from application to payment review
- Invalid and incomplete card-number validation
- Invalid and incomplete expiration-date validation
- Invalid and incomplete CVC validation
- Successful payment workflow through the confirmation step

## Project Structure

```text
playwright-bdd-automation/
├── .github/workflows/      # Framework validation workflow
├── features/               # Gherkin features and acceptance scenarios
├── steps/                  # Cucumber step definitions
├── pages/                  # Page Object Model classes
├── hooks/                  # Browser lifecycle and failure screenshots
├── test-data/              # Externalized JSON test data
├── utilities/              # Reusable browser and data helpers
├── globalPagesSetup.js     # Central page-object initialization
├── cucumber.cjs            # Cucumber configuration and reporting
└── package.json            # Dependencies and scripts
```

## Framework Design

### Page Object Model
Page locators are organized into reusable page classes. Shared behavior is inherited from `BasePage`, and page objects are initialized centrally in `globalPagesSetup.js`.

### BDD with Cucumber
Requirements are represented as Gherkin features using `Given`, `When`, and `Then` steps. Feature files are grouped by checkout stage and mapped to JavaScript step definitions.

### Test Data Separation
Product and pricing data are loaded from `test-data/qa_data.json` through a reusable data reader instead of being duplicated across scenarios.

### Failure Evidence
A global Cucumber `After` hook captures a full-page screenshot when a scenario fails and stores it in the generated reports directory.

### Reporting
Cucumber is configured to produce console progress plus JSON and HTML reports.

## Local Setup

```bash
git clone https://github.com/ihsan-onal/playwright-bdd-automation.git
cd playwright-bdd-automation
npm install
npx playwright install
```

The historical browser scenarios require environment-specific values from the retired QA environment, so they are retained as portfolio examples rather than advertised as currently executable tests.

Expected environment variables used by the framework include:

```text
SEP_URL
SEP_USERNAME
SEP_PASSWORD
CARD_NUMBER
EXPIRATION_DATE
CVC
ZIP_CODE
COUNTRY
```

Credentials and test values should remain outside source control.

## Framework Validation

Cucumber feature and step-definition wiring can be validated without contacting the retired application:

```bash
npm run test:dry
```

The GitHub Actions workflow performs this same dry-run validation. It does **not** claim that the historical end-to-end suite currently passes against a live application.

## Historical Test Execution

When the training QA environment was active, the suite was run with Cucumber scripts such as:

```bash
npm test
npm run test:tag
npm run test:smoke
```

Generated reports were written to `reports/`, with screenshots captured on failed scenarios.

## Project Context

This project originated as a capstone automation exercise during Cydeo's JavaScript and Playwright Automation with AI training program. The original training environment and framework starting point were provided as part of the course. The feature implementation, step definitions, page-object work, validation logic, and supporting automation code in this portfolio snapshot represent hands-on training work completed during that project.

The original development repository used feature branches and pull requests while the project was active. This public repository is intentionally a curated portfolio snapshot and does not reproduce that historical branch or commit history.

## Author

**Ihsan Onal**  
GitHub: [ihsan-onal](https://github.com/ihsan-onal)
