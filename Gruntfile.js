

module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        header_info: `
/*
    Theme Name: Hello Wordpress
    Theme URI: https://erikyuzwa.com
    Description: Hello Wordpress Theme
    Version: 0.0.0
    Author: Erik Yuzwa (@eyuzwa)
    Author URI: https://erikyuzwa.com
    Tags: Blank, HTML5, CSS3
    
    License: MIT
    License URI: http://opensource.org/licenses/mit-license.php
*/
        `,

        header_pkg: require('./package.json'),

        clean: {
            build: ['build'],
            dist: ['dist'],
        },

        compress: {
            build: {
                options: {
                    archive: 'dist/hello-wordpress.zip'
                },
                files: [
                    { expand: true, cwd: 'build/', src: ['**'], dest: '/' }, // includes files in path and its subdirs
                    //{expand: true, cwd: 'path/', src: ['**'], dest: 'internal_folder3/'}, // makes all src relative to cwd
                    //{flatten: true, src: ['path/**'], dest: 'internal_folder4/', filter: 'isFile'} // flattens results to a single level
                ]
            }
        },

        copy: {
            build: {
                files: [
                    // includes files within path
                    {expand: true, flatten: true, src: ['./*.php'], dest: 'build/'},
                    {expand: true, cwd: './src', src: ['lang/**'], dest: 'build/'},
                    {expand: true, flatten: true, src: ['./screenshot.png'], dest: 'build/'}

                    // includes files within path and its sub-directories
                    //{expand: true, src: ['path/**'], dest: 'dest/'},

                    // makes all src relative to cwd
                    //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                    // flattens results to a single level
                    //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ],
            },
        },

        header: {
            build: {
                options: {
                    text: '<%= header_info %>'
                },
                files: {
                    'build/style.css': 'build/style.css'
                }
            }
        },

        replace: {
            build: {
                src: ['build/style.css'],             // source files array (supports minimatch)
                dest: 'build/style.css',             // destination directory or file
                replacements: [{
                    from: '0.0.0',                   // string replacement
                    to: '<%= header_pkg.version %>'
                }]
            }
        },

        sass: {
            build: {
                files: {
                    'build/style.css': 'src/css/style.scss'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'build/js/theme.min.js': ['src/js/theme.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'sass', 'header', 'replace', 'copy', 'uglify', 'compress']);
};
