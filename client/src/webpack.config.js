// webpack.config.js
export const module = {
    rules: [
        // ... other rules
        {
            throwIfNamespace: false,
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    ],
};
