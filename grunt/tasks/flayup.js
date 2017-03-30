module.exports = function (grunt, options) {
  var fs = require('fs');
  var pagesDir = __dirname + '/../../source';
  var flatDir = __dirname + '/../../debug/flayup' + '/flat/';
  var configDir = __dirname + '/../../debug/flayup/';


  grunt.registerTask('flayup', 'Flayup config task', function() {

    var done = this.async();
    var projectId = JSON.parse(fs.readFileSync(__dirname +'/../../package.json', 'utf8')).name;
    var Flayup = {
      views: {},
      pages: {},
      projectId: projectId
    };

    var View = function(id, name, source, format ) {
      this.id = id;
      this.name = name;
      this.source = source;
      this.isActive = false;
    };

    var Page = function(name, views, ext) {
      this.name = name;
      this.ext = ext;
      this.location = this.name + this.ext;
      this.views = views;
      this.isActive = false;
    };

    fs.readdir(pagesDir, function(err, files) {
      if(err) {
        console.log(err);
      }

      for (var i = 0; i < files.length; i++) {
        var tmpObj = files[i].split('.');
        if(tmpObj[1] == 'html') {
          Flayup.pages[tmpObj[0]] = new Page(tmpObj[0],{},'.html');
        }
      }

      fs.readdir(flatDir, function(err, files) {
        if(err) {
          console.log(err);
        }

        var id = 0;
        for (var i = 0; i < files.length; i++) {
          var tmpObj = files[i].split('.');
          if(tmpObj[0].length) {
            if(tmpObj.length == 2) {
              var tmpView = new View(id, tmpObj[0], tmpObj[0] + '.' + tmpObj[1], false);
              Flayup.views[tmpObj[1]] = tmpView;
              id++;

            } else if(tmpObj.length == 3) {
              var tmpView = new View(id, tmpObj[1], tmpObj[0] + '.' + tmpObj[1]+'.'+tmpObj[2], false);
              Flayup.views[tmpObj[1]] = tmpView;
              id++;

              if(Flayup.pages[tmpObj[0]]) {
                Flayup.pages[tmpObj[0]].views[tmpObj[1]] = tmpView;
              }
            }

          }
        }

        fs.writeFile(configDir + 'config.json', JSON.stringify(Flayup), 'utf-8', function(err) {
          if (err) {
            throw err;
            done();
          }

          console.log('FLayup configuration is ready!');
          done();
        });
      });
    });
  });
};
