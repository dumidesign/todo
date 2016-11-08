module.exports = function (grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            sass: {
                files: "src/scss/*.scss",
                tasks: ['sass']
            }
        },
        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination         // source file
                    "src/css/styles.css" : "src/scss/styles.scss"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};