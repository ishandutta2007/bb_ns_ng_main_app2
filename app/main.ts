// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { FirebaseService } from "./modules/services/firebase.service";
var firebase = require("nativescript-plugin-firebase");
try {
  firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
    );
} catch (error) {
  console.log("firebase.init doesnt even get called properly: " + error);
}

import { AppModule } from "./modules/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);