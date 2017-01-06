# vue-devtools-select
Small example to show a bug in the vue-devtools (3.0.4)

## How to install

Install the dependencies
```shell
yarn install
```

Watch the files and start the HTTP server
```shell
yarn run dev
```

## How to reproduce the bug

* Open a browser and go to http://localhost:3000.
* Open the vue-devtools and select the Vuex tab.
* Once the "setItems" mutation is committed, select an item, e.g. Alice.
* Once the "selectItem" mutation is committed, travel to the "setItems" mutation.

We can see that several "selectItem" mutations were committed instead putting the "setItems" mutation active.

This bug doesn't occur when a default item is selected, for example, setting the ```selectedItemId``` to 1 instead of ```null```.
