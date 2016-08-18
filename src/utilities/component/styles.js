
const EXAMPLE_STYLES_DATA = require('../../data/example/styles.json');

export function getStylesData(styles) {

  const stylesSrc = EXAMPLE_STYLES_DATA.styles;

  return (stylesSrc[styles]) ? stylesSrc[styles] : {};

}

export function getStyles(data) {

  const { styles } = data;

  const stylesData = getStylesData(styles);

  // need to potentially parse and prep styles?

  // console.log("need to loop through the keys in stylesData", styles, stylesData);

  return stylesData;

}