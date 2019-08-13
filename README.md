## JSConf 2019 Componetizing end-to-end tests talk

Thanks for checking out this repository. Both the slide deck as well as the Cypress example code are located here.

## Example code

Navigate to `/cypress/helpers/select.js` for the source code of the `react-select-virtualized` helpers. `/cypress/integration/select.spec.js` contains the spec file demoed during the presentation.

If you want to run the example, first make sure you download all dependencies (this may take a while. The Cypress dependency will download binaries to run on your system):

```
yarn install
```

OR

```
npm install
```

Once that is complete, the following commands will open Cypress in debug mode:

```
yarn cypress open
```

OR

```
npm run cypress:open
```

## Run presentation

Slides are available in MDX form at `/presentation/index.mdx`. If you want to run the slide deck locally, you can do so by running

```
yarn start
```

OR

```
npm start
```
