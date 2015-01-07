jQuery Simple Drawer
====================

A simple content drawer based on jQuery. Unlike other drawer plugins, this is not built for navigation menus specifically. Simply define a toggle element and a drawer element, and PRESTO: your drawer content will hidden in the drawer until the toggle is clicked. Requires [class.js](https://classjs.readthedocs.org/en/latest/), which is included in the bower_components folder if you're not using Bower.

##How to use it
Instantiate a new SimpleDrawer class and pass in your element. You can also pass an options object as your second parameter, but this is optional.

````javascript
new Drawer($('.simple-drawer'), {
        target: '.drawer-target', //selector for the drawer element
        toggle: '.drawer-toggle', //selector for the toggle element
        autoActive: true //setting to false will cause the drawer to be closed at load
    });
````

##Options

**Target:** Selector for the drawer element. *Default: .drawer-target*<br />
**Toggle:** Selector for the toggle element. *Default: .drawer-toggle*<br />
**autoActive:** setting to false will cause the drawer to be closed at load. *Default: true*

