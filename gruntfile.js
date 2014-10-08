module.exports = function(grunt) {

    grunt.initConfig({
        
        stonejs: {
            av: {
                options: {
                    stoneName: 'AlmostVanilla',
                    configFile: 'almost-vanilla.js',
                    baseDir: 'src/'
                },
                files: {
                    'almost-vanilla.js': ['src/**/*']
                }
            }
        },
        
        uglify: {
            dist: {
                files: {
                    'almost-vanilla.min.js': ['almost-vanilla.js']
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-stonejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['stonejs', 'uglify']);

}