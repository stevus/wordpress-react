const path =  require('path')

module.exports = {
    entry: './jsx/index.js',
    output: {
        path: path.resolve(__dirname, 'wordpress-install/wp-content/themes/forcepushed/js'),
        filename: 'bundle.js'
    }
}
