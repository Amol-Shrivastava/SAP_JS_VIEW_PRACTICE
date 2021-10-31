/* jshint esversion: 6 */

sap.ui.view("maven.efl.dev.views.App", {
  getControllerName: function () {
    return "maven.efl.dev.controllers.App";
  },

  createContent: function () {
    return new sap.m.App("idAppCon");
  },
});
