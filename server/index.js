require('@babel/register')({
    'presets': ['@babel/preset-env', '@babel/preset-react']
})
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {default: Container} = require('../components/button/container.jsx')

const path = require('path')
const fs = require('fs');
const fsAsync = require('fs/promises');

const FRAGMENT_DIR = path.resolve(`${process.cwd()}/out/fragment`);
const COMPONENT_DIR = path.resolve(`${process.cwd()}/components`);

(async () => {
    try {
        let content = ReactDOMServer.renderToString(React.createElement(Container, {ariaLabel: 'label text'}));

        if (!fs.existsSync(FRAGMENT_DIR)) {
            fs.mkdirSync(FRAGMENT_DIR, {recursive: true});
        }

        try {
            const hydrate = fs.readFileSync(`${COMPONENT_DIR}/button/hydration.js`, 'utf8');

            content += `<script type="module">${hydrate}</script>`
        } catch (err) {
            console.error(err);
        }


        await fsAsync.writeFile(`${FRAGMENT_DIR}/button.gohtml`, content);
    } catch (err) {
        console.log(err);
    }
})()
