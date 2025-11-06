import resolve from '@rollup/plugin-node-resolve';

export default {
input: 'index.js',
output: {
    dir: './out/',
    format: 'iife'
},
// Disable "Use of Eval" Warning
onwarn: function (message) {
    if (/mapsjs.bundle.js/.test(message) && /Use of eval/.test(message)) return;
    console.error(message);
},
plugins: [resolve()]
};
