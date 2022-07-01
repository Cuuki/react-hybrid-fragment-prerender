require('@babel/register')({
    'presets': ['@babel/preset-env', '@babel/preset-react']
})
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {default: Button} = require('../components/button.jsx')

const path = require('path')
const fs = require('fs');
const fsAsync = require('fs/promises');

const fragmentDir = path.resolve(`${process.cwd()}/out/fragment`);

(async () => {
    try {
        const content = ReactDOMServer.renderToStaticMarkup(
            React.createElement(Button, {ariaLabel: 'label text'})
        );
        if (!fs.existsSync(fragmentDir)) {
            fs.mkdirSync(fragmentDir, {recursive: true});
        }
        await fsAsync.writeFile(`${fragmentDir}/button.html`, content);
    } catch (err) {
        console.log(err);
    }
})()
