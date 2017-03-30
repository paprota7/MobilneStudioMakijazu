module.exports = function (grunt, options) {
  return {
    default: {
      options: {
        destPrefix: '<%= paths.dist %>'
      },
      files: [
        // jQuery
        {src: 'jquery/dist/jquery.min.js', dest: 'js/vendor/jquery.js'},

        // Bootstrap
        {src: 'bootstrap-sass-official/assets/javascripts/bootstrap.min.js', dest: 'js/vendor/bootstrap.js'},
      ]
    }
  };
};
