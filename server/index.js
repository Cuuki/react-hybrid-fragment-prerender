require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
const { build } = require("vite");
const {
  default: getButtonServerString,
} = require("../components/button/ssr.jsx");

const path = require("path");
const fs = require("fs");
const fsAsync = require("fs/promises");

const DATA = {
  body: {
    labelText: "Click me",
    name: "John Doe",
  },
};

const FRAGMENT_DIR = path.resolve(`${process.cwd()}/client/out/fragment`);
const COMPONENT_DIR = path.resolve(`${process.cwd()}/components`);

(async () => {
  try {
    if (fs.existsSync(FRAGMENT_DIR)) {
      fs.rmdirSync(FRAGMENT_DIR, { recursive: true });
    }

    await build({
      build: {
        minify: "esbuild",
        outDir: `${FRAGMENT_DIR}/button`,
        lib: {
          entry: `${COMPONENT_DIR}/button/hydration.jsx`,
          name: 'Button',
          fileName: () => "hydration.js",
          formats: ["iife"],
        },
      },
      define: {
        "process.env.NODE_ENV": "'production'",
        "process.env.FRAGMENT_DATA": JSON.stringify(DATA),
      },
    }).catch(() => process.exit(1));

    if (!fs.existsSync(FRAGMENT_DIR)) {
      fs.mkdirSync(FRAGMENT_DIR, { recursive: true });
    }

    await fsAsync.writeFile(
      `${FRAGMENT_DIR}/button/index.html`,
      getButtonServerString(DATA)
    );
  } catch (err) {
    console.log(err);
  }
})();
