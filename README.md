# Project

## Overview

This project is a small React stopwatch application built with Create React App. It exposes a timer that can be started, paused, and reset while preserving the original product behavior in a modernized and secure stack.

## Features

- Start and pause the stopwatch
- Reset the elapsed time to zero
- Responsive centered layout
- Modern React 18 application shell
- Stable production build with optimized dependency versions

## Technologies

- React 18
- React DOM 18
- JavaScript
- Create React App
- Testing Library
- ESLint via react-scripts

## Requirements

- Node.js 18 LTS or newer
- npm 9 or newer

## Installation

```bash
npm install
```

## Environment Variables

This project does not require any environment variables for local development.

## Running Locally

```bash
npm start
```

The app runs on the default CRA development server, usually at http://localhost:3000.

## Running with Docker

Docker is not configured in this repository at the moment.

## Available Scripts

```bash
npm start
npm test
npm run build
npm run lint
npm run eject
```

## Build

```bash
npm run build
```

The production build is generated in the `build` folder.

## Tests

```bash
CI=true npm test -- --watchAll=false
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  App.js
  App.test.js
  index.css
  index.js
  setupTests.js
  style.css
  assets/
public/
  index.html
package.json
README.md
```

## Environment Configuration

No custom environment file is required. The app is a simple front-end project and uses the standard CRA environment conventions.

## Deployment

This project can be deployed to any static hosting solution compatible with a Create React App production build, such as Vercel, Netlify, or Nginx static hosting.

## Performance

The app is intentionally lightweight. The stopwatch logic is kept minimal and uses a single interval per active run, which avoids unnecessary re-renders and keeps bundle size low.

## Security

The project does not currently handle credentials, API secrets, or user-generated content. The updated dependency stack removes outdated vulnerable packages from the original CRA 3 configuration and follows secure, supported React tooling.

## Troubleshooting

- If the app does not start, reinstall dependencies with `npm install`.
- If tests fail, run them with `CI=true npm test -- --watchAll=false`.
- If the production build fails, ensure Node.js is on a supported LTS version.

## Contributing

Contributions are welcome. Please keep changes minimal, preserve the current business behavior, and validate the build and tests before submitting a pull request.

## License

This project is distributed without an explicit license file in the repository. Please confirm the intended distribution terms with the repository owner before production use.
