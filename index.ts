// Import stylesheets
import './style.css';
import minimatch from 'minimatch';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

testMinimatch();
function testMinimatch() {
  console.info(minimatch('/a/b', '/a/*/c/d', { partial: true }));
  console.info(minimatch('/a/b', '/a/*/c/d'));
  console.info(minimatch('/opt/nagki/myprojs/test/stockscreenertest/src/components/stateExamples.test.tsx', '**/{stories,mobx,gridlayout,recoil,custom-theme,csslayouts,components}/**/*.ts*'))
}