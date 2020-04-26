/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-focus',
      'dark-focus-within'
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active'
    ]
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
