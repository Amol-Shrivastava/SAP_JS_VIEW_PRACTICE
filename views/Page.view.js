/* jshint esversion: 6 */

sap.ui.view("maven.efl.dev.views.Page", {
  getControllerName: function () {
    return "maven.efl.dev.controllers.Page";
  },

  createContent: function (oController) {
    let oTitle = new sap.m.Title("pageTitle", {
      text: "Page Title",
    });

    return new sap.m.Page("idPage", {
      content: [oTitle],
    });
  },
});
