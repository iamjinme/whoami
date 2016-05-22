# WhoAmI Microservice for FreeCodeCamp

[![Join the chat at https://gitter.im/FreeCodeCamp/FreeCodeCamp](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FreeCodeCamp/FreeCodeCamp)

## Overview

WhoAmI is a microservice API for get information about your browser, it's support on Clementine.js. This app is a challenge for Back End Certification on FreeCodeCamp.

The [Free Code Camp](http://www.freecodecamp.com) version of Clementine.js is meant for use when completing projects as part of the FCC curriculum. This version includes GitHub authentication using [Passport](http://passportjs.org/).

# Quick Start Guide

### Prerequisites

In order to use WhoAmI Microservice, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install WhoAmI Microservice, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/mirabalj/whoami.git your-project
```

To install the dependencies, enter the following in your terminal:

```
$ cd your-project
$ npm install
```

This will install the WhoAmI Microservice components into the `your-project` directory.

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
PORT=8080
```

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!

## Authors

* **Jinme Mirabal** - *All the work, except Clementine.js* - [Jinme Mirabal](https://github.com/mirabalj)

## Contributing

This is an open-source project, and contributions are always welcome!

## License

MIT License. [Click here for more information.](LICENSE.md)
