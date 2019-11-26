module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'assets/sass/main.scss'
        },
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps
        
        // or
        
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')(), // add vendor prefixes
          require('cssnano')(), // minify the result
        ]
      },
      dist: {
        src: 'css/style.css'
      }
    },
    watch: {
      css: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['images/'],
        tasks: ['imagemin']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass', 'postcss'], ['watch']);
  
};