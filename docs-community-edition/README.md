# Mozilla Hubs Community Edition Documentation

![A screenshot of the Hubs Community Edition Documentation](screenshot.png?raw=true)

This repository hosts the source code and images used to generate the Hubs Community Edition Documentation.

The source code is visible [here on GitHub](https://github.com/zfox23/hubs/tree/ce-docs/docs-community-edition).

As of 2023-09-26, the [documentation is hosted here](https://zachfox.io/hubs-community-edition-docs).

## Building the Documentation from Source
### Prerequisites
1. Install [the latest version of NodeJS LTS](https://nodejs.org/en/download).
    - This developer has v18.18.0 installed.
2. Using your preferred command line interface, `cd` into the `app` directory within this folder.
3. In your command line, type `npm i` and press enter to install the application's NodeJS dependencies.

### Running the Documentation Site
1. In your command line, `cd` into the `app` directory within this folder.
2. Type `npm run develop` and press enter.
3. Navigate to [`http://localhost:8000`](http://localhost:8000) to access the docs.

You can use `npm run build` to build a faster, minified version of the tester application that can be deployed on a remote Web server from the resultant `public/` folder.
