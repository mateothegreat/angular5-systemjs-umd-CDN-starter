/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            "npm:": "node_modules/"
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: "app",

            "tslib": "https://unpkg.com/tslib@1.8.1/tslib.js",
            "@angular/animations": "https://unpkg.com/@angular/animations",
            "@angular/common": "https://unpkg.com/@angular/common",
            "@angular/common/http": "https://unpkg.com/@angular/common@5.2.0/bundles/common-http.umd.js",
            "@angular/compiler": "https://unpkg.com/@angular/compiler",
            "@angular/core": "https://unpkg.com/@angular/core",
            "@angular/forms": "https://unpkg.com/@angular/forms",
            "@angular/http": "https://unpkg.com/@angular/http",
            "@angular/platform-browser":"https://unpkg.com/@angular/platform-browser",
            "@angular/platform-browser-dynamic":"https://unpkg.com/@angular/platform-browser-dynamic",
            "@angular/router": "https://unpkg.com/@angular/router",
            "@angular/router-deprecated":"https://unpkg.com/@angular/router-deprecated",
            "@angular/upgrade": "https://unpkg.com/@angular/upgrade",
            "angular2-in-memory-web-api":"node_modules/angular2-in-memory-web-api",

            "@angular/material": "https://unpkg.com/@angular/material",
            "@angular/material/theming": "https://unpkg.com/@angular/material",
            "@angular/cdk/platform": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-platform.umd.js",
            "@angular/cdk/a11y": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-a11y.umd.js",
            
            "@angular/cdk/collections": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-collections.umd.js",
            "@angular/cdk/observers": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-observers.umd.js",
            "@angular/cdk/accordion": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-accordion.umd.js",
            "@angular/cdk/scrolling": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-scrolling.umd.js",
            "@angular/cdk/table": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-table.umd.js",
            "@angular/cdk/stepper": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-stepper.umd.js",
            "@angular/cdk/portal": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-portal.umd.js",
            "@angular/cdk/layout": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-layout.umd.js",
            "@angular/cdk/overlay": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-overlay.umd.js",
            "@angular/cdk/bidi": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-bidi.umd.js",
            "@angular/cdk/a11y": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-a11y.umd.js",
            "@angular/cdk/coercion": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-coercion.umd.js",
            "@angular/cdk/keycodes": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-keycodes.umd.js",
            "@angular/cdk/a11y": "https://unpkg.com/@angular/cdk@5.0.4/bundles/cdk-a11y.umd.js",

            rxjs: "https://unpkg.com/rxjs"
            
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: "processed.js",
                meta: {
                    "./*.js": {
                        loader: "systemjs-angular-loader.js"
                    }
                }
            },
            rxjs: {
                defaultExtension: "js"
            }
        }
    });
})(this);
