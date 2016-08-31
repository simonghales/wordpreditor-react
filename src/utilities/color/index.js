
export function getColorString(color) {

  const { hex, rgb } = color;
  const { a } = rgb;

  if(a < 1) {
    return getRGBAString(rgb);
  } else {
    return getHexString(hex);
  }

}

export function getHexString(hex) {
  return hex;
}

export function getRGBAString(rgb) {

  const { r, g, b, a } = rgb;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

}