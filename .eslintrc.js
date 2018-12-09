module.exports = {
  "env": {
    "browser": true,
  },
  "extends": "airbnb-base",
  'rules': {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
    }],
    "linebreak-style": ["error", "windows"],
  }
};