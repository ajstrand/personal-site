import fs from "fs"
import { minify } from 'csso';

export async function findAndMinifyCritical(dir) {
    let criticalCss = '';

    fs.readdirSync(dir).forEach(file => {
        const f = `${dir}/${file}`;
        const content = fs.readFileSync(f).toString();
        criticalCss += minify(content).css;
    });

    return criticalCss;
}

export async function inlineCritical(html, critical) {
    return html.replace('</head>', `<style>${critical}</style></head>`);
}

/*
we return the html file with the css inlined at the top
*/
const getCSS = async (cssDirPath, html) => inlineCritical(
    html,
    await findAndMinifyCritical(cssDirPath)
)

export default getCSS