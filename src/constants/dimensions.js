import { REF_RATIO, isIos, isAndroid, IS_SMALL_DEVICE } from './platform';

// NavBar
export const IOS_STATUS_BAR_HEIGHT = 20 * REF_RATIO;
export const NAV_HEIGHT_IOS = 74 * REF_RATIO;
export const NAV_HEIGHT_ANDROID = 86 * REF_RATIO;
export const TAB_BAR_HEIGHT = 50 * REF_RATIO;
export const TAB_BAR_HEIGHT_SMALL = 40 * REF_RATIO;
export const TAB_BAR_HEIGHT_XSMALL = 30 * REF_RATIO;
export const TAB_BAR_HEIGHT_XXSMALL = 25 * REF_RATIO;
export const INDICATOR_HEIGHT = 2 * REF_RATIO;
export const INDICATOR_WIDTH = 30 * REF_RATIO;
export const NAV_BUTTON_MARGIN_TOP = (isIos ? 33 : 21) * REF_RATIO;
export const CUSTOM_NAV_BUTTON_MARGIN_TOP = (isIos ? 25 : 30) * REF_RATIO;
export const FIXED_SUPERPOSITION_STYLE = -(isAndroid * 20 + 45) * REF_RATIO;
// Margins
export const MARGIN_TINY = 5 * REF_RATIO;
export const MARGIN_SMALL = 10 * REF_RATIO;
export const MARGIN_MEDIUM = 20 * REF_RATIO;
export const MARGIN_BIG = 30 * REF_RATIO;
export const MARGIN_MEDIUM_BIG = IS_SMALL_DEVICE ? 45 * REF_RATIO : 40 * REF_RATIO;
export const MARGIN_XBIG = 82 * REF_RATIO;
export const MARGIN_XXBIG = 100 * REF_RATIO;
// Fonts
export const FONT_SIZE_XXXSMALL = 8 * REF_RATIO;
export const FONT_SIZE_XXSMALL = 10 * REF_RATIO;
export const FONT_SIZE_XSMALL = 11 * REF_RATIO;
export const FONT_SIZE_SMALL = 12 * REF_RATIO;
export const FONT_SIZE_MEDIUM = 14 * REF_RATIO;
export const FONT_SIZE_BIG = 16 * REF_RATIO;
export const FONT_SIZE_XBIG = 18 * REF_RATIO;
export const FONT_SIZE_XXBIG = 20 * REF_RATIO;
export const FONT_LINE_XXXSMALL = 10 * REF_RATIO;
export const FONT_LINE_XXSMALL = 12 * REF_RATIO;
export const FONT_LINE_XSMALL = 13 * REF_RATIO;
export const FONT_LINE_SMALL = 14 * REF_RATIO;
export const FONT_LINE_MEDIUM = 16 * REF_RATIO;
export const FONT_LINE_BIG = 19 * REF_RATIO;
export const FONT_LINE_XBIG = 21 * REF_RATIO;
export const FONT_LINE_XXBIG = 28 * REF_RATIO;
// Border
export const BORDER_WIDTH_TINY = 0.5 * REF_RATIO;
export const BORDER_WIDTH = 1 * REF_RATIO;
export const BORDER_WIDTH_STRONG = 2 * REF_RATIO;
export const BORDER_RADIUS = parseInt(5 * REF_RATIO, 10);
export const BORDER_RADIUS_CIRCLE = 10 * REF_RATIO;
export const BORDER_RADIUS_SWITCH_TAB = 18 * REF_RATIO;
export const BORDER_RADIUS_SEARCH_BAR = 20 * REF_RATIO;
export const BORDER_RADIUS_SLIDER = 30 * REF_RATIO;
export const BORDER_RADIUS_BUTTON = Math.round(30 * REF_RATIO) / 2;
// Icons
export const ICON_SIZE_XXSMALL = 5 * REF_RATIO;
export const ICON_SIZE_XSMALL = 10 * REF_RATIO;
export const ICON_SIZE_SMALL = 20 * REF_RATIO;
export const ICON_SIZE_MEDIUM = 25 * REF_RATIO;
export const ICON_SIZE_NORMAL = 38 * REF_RATIO;
export const BULLET_SIZE_NORMAL = 10 * REF_RATIO;
// Inputs
export const INPUT_HEIGHT_XSMALL = 25 * REF_RATIO;
export const INPUT_HEIGHT_SMALL = 40 * REF_RATIO;
export const INPUT_HEIGHT_MEDIUM = 50 * REF_RATIO;
export const KEYBOARD_TOP_SPACE = 20 * REF_RATIO;
// Buttons
export const BUTTON_HEIGHT = 60 * REF_RATIO;
