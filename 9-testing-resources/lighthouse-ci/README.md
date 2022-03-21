Here is the [Github](https://github.com/GoogleChrome/lighthouse-ci) for Lighthouse CI.  

Lighthouse CI is a suite of tools that make continuously running, saving, retrieving, and asserting against Lighthouse results as easy as possible.  

In order to set this up with Github Actions, **two new files are needed**:

- a workflow
- a settings file for Lighthouse.

In the base directory, create a dir titled `.github`.
Within this, create a dir titled `workflows`.
Then, create a .yml file for this workflow.

Here is an example workflow: 

```
name: LighthouseCI
on: [push]

jobs:
  lighthouseci:
    timeout-minutes: 5
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 14
      - name: Install npm
        working-directory: ./ui
        run: npm install && npm install -g @lhci/cli@0.8.x
      - name: Run build
        working-directory: ./ui
        run: npm run build
      - name: Run lighthouseCI
        working-directory: ./ui
        run: lhci autorun
```
- This workflow has a timeout of 5 minutes.  
- This workflow also specifies a working directory as '/ui'.  

These steps may need to be changed to fit your project.

---
Next, create a new .js file in the working directory, titled `lighthouserc`.  
There are other ways to create this settings file, and you can read more [here.](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

Here is an example of using public storage to collect the lighthouse report - this will be kept for a few days and then will be removed, and a link will be available for this report in the Github Actions log. 

```
module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
```

There are two ways for this set up, depending on whether you have static or dynamic pages.  

For dynamically rendered pages, reference the start server command and the url:

```
module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            url: ['http://localhost:3000']
        },
    }
};
```

For statically rendered pages, reference the directory that the html pages are stored:

```
module.exports = {
    ci: {
        collect: {
            staticDistDir: './public',
        },
    }
};
```
---  

This is the most basic setup for Lighthouse CI.  
The settings file can specify further options for `collect`, `assert`, `upload`, `server` and `wizard`.  
This is documented in the [configuration documentation.](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)

