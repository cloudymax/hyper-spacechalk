const bg = '#232336';
const fg = '#b3b0d6';
const black = 'Black';
const red = '#f2748a';
const green = '#a8fd57';
const yellow = '#f7fb53';
const blue = '#5f87ff';
const magenta = '#f289f9';
const cyan = '#5ac4b9';
const white = '#CAEAFF';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: fg,
    foregroundColor: fg,
    backgroundColor: bg,
    borderColor: black,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
    css: `
      ${config.css || ''}

      .hyper_main {
        border-width: 0px;
      }
    `
  });
}
