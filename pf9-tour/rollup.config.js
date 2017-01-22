import babel from 'rollup-plugin-babel';
export default {
    entry: 'src/pf9-tour.js',
    dest: 'build/pf9-tour.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
};
