/**@type {import('prettier').Config} */
module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
