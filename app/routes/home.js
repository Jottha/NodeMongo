module.exports = function(application, req, res){
    application.get('/', function (req, res) {
        application.app.controllers.homeController.index(application, req, res);
    });
};