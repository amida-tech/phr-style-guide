module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-kss');

    grunt.registerTask('default', ['kss']);

    grunt.initConfig({
        watch: {
            all: {
                files: ['./phr/*.scss', './phr/**/*.scss', 'gruntfile.js'],
                tasks: ['default']
            }
        },
        kss: {
            options: {
                includeType: 'scss',
                includePath: './phr/styles.scss',
            },
            dist: {
                files: {
                    './styleguide': ['./phr']
                }
            }
        }
    });

};