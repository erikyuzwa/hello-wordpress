
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        header_info: `
/*
    Theme Name: Hello WordPress
    Theme URI: https://erikyuzwa.com/hello-wordpress
    Description: The Hello WordPress theme is designed to begin life as a "starter" minimalist theme. It features custom styles for all the default blocks, and is built so that what you see in the editor looks like what you'll see on your website. Hello Wordpress is designed to be adaptable to a wide range of websites, whether you’re running a personal blog, or launching a new business.
    Version: 0.0.0
    Author: Erik Yuzwa (@eyuzwa)
    Author URI: https://erikyuzwa.com
    Tags: one-column, flexible-header, accessibility-ready, custom-colors, custom-menu, editor-style, translation-ready
    Text Domain: hello-wordpress
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
                ]
            }
        },

        copy: {
            build: {
                files: [
                    // includes files within path
                    {expand: true, flatten: true, src: ['./*.php'], dest: 'build/'},
                    {expand: true, cwd: './src', src: ['lang/**'], dest: 'build/'},
                    {expand: true, flatten: true, src: ['./screenshot.png', './README.md'], dest: 'build/'}
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

    grunt.registerTask('default', ['sass', 'header', 'replace', 'copy', 'uglify', 'compress']);
};
