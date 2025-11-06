export default {
    build: {
        rollupOptions: {
            onwarn: function(message) {
                if (/mapsjs.bundle.js/.test(message) && /Use of eval/.test(message)) return;
                console.error(message);
            },
        }
    }
}
