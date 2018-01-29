module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\n',
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            CrackerTrapDevJS: {
                src: './index.js',
                dest: './dev-build/cracker-trap.js'
            },
            CrackerTrapProductionJS: {
                src: './index.js',
                dest: './build/cracker-trap.js'
            }
        },
        uglify: {
            CrackerTrapProductionMinJS: {
                files: {
                    './build/cracker-trap.min.js': './build/cracker-trap.ob.js'
                }
            }
        },
        watch: {
            files: ['./src/*.js'],
            tasks: ['default']
        },
        obfuscator: {
            options: {
                banner: '// You can\'t debug this library.\n',
                //debugProtection: true,
                compact: true,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.2,
                mangle: true,
                unicodeEscapeSequence: false,
                selfDefending: false,
                stringArrayEncoding: true,
            },
            CrackerTrapProductionObfuscateJS: {
                options: {},
                files: {
                    './build/cracker-trap.ob.js': ['./build/cracker-trap.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-obfuscator');

    grunt.registerTask('default', ['concat', 'obfuscator', 'uglify']);
};
