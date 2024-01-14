module.exports = {
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "plugins": ['@trivago/prettier-plugin-sort-imports'],
  "bracketSpacing": true,
  "importOrder": ["^react$", "<THIRD_PARTY_MODULES>", "^@(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
}
