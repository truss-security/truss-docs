# Website

The Truss documentation website is built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Commits to the [**main**](https://github.com/truss-security/truss-docs/tree/main) branch triggers the .github/workflows/deploy_react.yml workflow which initiates a build and deployment to github pages.

### Updating Static Documents

The static documentation pages can be edited directly from the /docs directory. 

### Updating the API

Edit the **openapi/trussapi.json** file to make changes to the API documentation. 

### STIX 2.0

The trussapi.json uses the [STIX 2.0](https://github.com/truss-security/cti-stix2-json-schemas/blob/master/README.md) schema. 

There is an outstanding [issue](https://github.com/truss-security/truss-docs/issues/1) where inserting references to a forked version of the STIX repo failed to pull in parameter details. Therefore, the entire STIX 2.0 `schemas` directory was directly copied into the `truss-docs/openapi` directory.