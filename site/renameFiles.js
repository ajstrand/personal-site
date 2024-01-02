import { rename } from 'fs';
import { join } from 'path';
import {replaceExt} from './replaceExt.js';
import {glob} from "glob";

const callback = () => {};
const main = () => {

    const project = process.cwd()
    const build = "build/dev/javascript/site"
    const dir = `${project}/${build}`
    const filesToGrab =  join(dir, 'entry-**.js')
    const island =  join(dir, 'Island.js')
    const hydrate =  join(dir, 'clientHydrate.js')
    const stuff =  join(dir, 'server-test.js')

    const filesEntry = glob.sync(
        filesToGrab
    );
    const second = glob.sync(
        island
    );
    const third = glob.sync(
        hydrate
    );
    const fourth = glob.sync(
        stuff
    )

    const files = filesEntry.concat(second, third, fourth)
    files.forEach((file) => {
        const newName = replaceExt(file, '.jsx')
        rename(file, newName, callback)
    })


}

main();