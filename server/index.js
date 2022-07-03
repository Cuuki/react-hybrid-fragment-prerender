require('@babel/register')({
    'presets': ['@babel/preset-env', '@babel/preset-react']
})
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {default: Button} = require('../components/button-container.jsx')

const path = require('path')
const fs = require('fs');
const fsAsync = require('fs/promises');

const FRAGMENT_DIR = path.resolve(`${process.cwd()}/out/fragment`);
const CLIENT_DIR = path.resolve(`${process.cwd()}/client`);

(async () => {
    try {
        let content = ReactDOMServer.renderToString(
            React.createElement(Button, {ariaLabel: 'label text'})
        );

        if (!fs.existsSync(FRAGMENT_DIR)) {
            fs.mkdirSync(FRAGMENT_DIR, {recursive: true});
        }

        try {
            const hydrate = fs.readFileSync(`${CLIENT_DIR}/hydrate-button.jsx`, 'utf8');

            content += `<script type="module">${hydrate}</script>`
        } catch (err) {
            console.error(err);
        }


        await fsAsync.writeFile(`${FRAGMENT_DIR}/button.gohtml`, content);
    } catch (err) {
        console.log(err);
    }
})()
