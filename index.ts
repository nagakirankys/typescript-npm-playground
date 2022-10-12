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
  // To match both .ts/.tsx files, use {x,}
  console.info(minimatch('/opt/nagki/myprojs/test/stockscreenertest/src/components/state/stateExamples.test.tsx', '**/{stories,mobx,gridlayout,recoil,custom-theme,csslayouts,components/{state,state1}}/**/*.ts{x,}'))
}