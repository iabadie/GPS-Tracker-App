export function getCustomStyles(variants, props, styles, stylePrefix = '') {
  return variants
    .map(variant => (props[variant] ? styles[`${variant}${stylePrefix}`] : null))
    .filter(style => style !== null);
}

export const boldContrast = { contrast: true, bold: true }; // Custom Text properties
export const constrast = { contrast: true }; // Custom Text properties
