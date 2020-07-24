const autoprefixer = require('autoprefixer');
// const postcssBem = require('postcss-bem');

module.exports = {
    'plugins': [
        autoprefixer()
        // postcssBem({
        //     'defaultNamespace': 'zpony', // default namespace to use, none by default
        //     'style': 'suit', // suit or bem, suit by default,
        //     'separators': {
        //         'descendent': '__' // overwrite any default separator for chosen style
        //     },
        //     'shortcuts': {
        //         'utility': 'util' // override at-rule name
        //     }
        // })
    ]
};
