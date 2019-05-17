import { REF_RATIO, WINDOW_WIDTH, isIos, isAndroid, IS_SMALL_DEVICE } from './platform';

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
export const TAB_FIXED_BORDER_RADIUS = Math.round(BORDER_RADIUS);
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
// Cells
export const MODULE_CELL_WIDTH = WINDOW_WIDTH * 0.41;
export const CELL_HEIGHT_SMALL = 40 * REF_RATIO;
export const CELL_HEIGHT_MEDIUM = 60 * REF_RATIO;
export const CHEVRON_SIZE = 25 * REF_RATIO;
export const DROPDOWN_HEIGHT = CELL_HEIGHT_SMALL * 4;
export const DROPDOWN_ICON_SIZE = 20 * REF_RATIO;
export const VEHICLE_PROFILE_HEIGHT = 60 * REF_RATIO;
export const VEHICLE_CELL_HEIGHT = 72 * REF_RATIO;
// Avatar
export const AVATAR_SIZE_XXSMALL = 25 * REF_RATIO;
export const AVATAR_SIZE_SMALL = 55 * REF_RATIO;
export const AVATAR_SIZE = 60 * REF_RATIO;
export const AVATAR_SIZE_BIG = 105 * REF_RATIO;
// Calendar
export const DATE_FIELD_HEIGHT = 60 * REF_RATIO;
export const CALENDAR_INPUT_WIDTH = 200 * REF_RATIO;
export const HOUR_INPUT_WIDTH = 50 * REF_RATIO;
export const CALENDAR_HEIGHT = 360 * REF_RATIO;
export const CALENDAR_HEIGHT_ANDROID = 530 * REF_RATIO;
export const CALENDAR_MODAL_WIDTH = 323 * REF_RATIO;
export const HOUR_MODAL_WIDTH = 120 * REF_RATIO;
export const HOUR_INPUT_MARGIN_LEFT = 16 * REF_RATIO;
// Graph
export const GRAPH_WIDTH = 345 * REF_RATIO;
export const GRAPH_HEIGHT = 183 * REF_RATIO;
export const BIG_POINT_OPACITY = 55;
export const BIG_POINT_RADIUS = 8 * REF_RATIO;
export const SMALL_POINT_RADIUS = 3.5 * REF_RATIO;
export const DEFAULT_MARGIN = 5 * REF_RATIO;
export const DEFAULT_CHART_LEFT_MARGIN = 5 * REF_RATIO;
export const DEFAULT_CHART_RIGHT_MARGIN = 5 * REF_RATIO;
export const DEFAULT_CHART_BOTTOM_MARGIN = 10 * REF_RATIO;
export const DEFAULT_CHART_TOP_MARGIN = 30 * REF_RATIO;
export const DEFAULT_STROKE_WIDTH = '2';
// Logo
export const LOGO_HEIGHT = 64 * REF_RATIO;
export const LOGO_WIDTH = 249 * REF_RATIO;
// Switch
export const SWITCH_CONTAINER_HEIGHT = 50 * REF_RATIO;
export const SLIDER__HEIGHT = 30 * REF_RATIO;
export const SWITCH_BUTTON_HEIGHT = 40 * REF_RATIO;
export const SWITCH_BORDER_RADIUS = 60 * REF_RATIO;
// SearchBar
export const SEARCH_PADDING = 40 * REF_RATIO;
// Button with arrow icon
export const TEXT_BUTTON_PADDING = MARGIN_TINY * isIos;
// EmptyView
export const EMPTY_VIEW_PADDING_HORIZONTAL = 40 * REF_RATIO;
// ModalSelector
export const MODAL_SELECTOR_HEIGHT = 60 * REF_RATIO;
// CustomDayComponent
export const CUSTOM_DAY_HEIGHT = 30 * REF_RATIO;
export const CUSTOM_DAY_WIDTH = 44 * REF_RATIO;
export const DAY_CIRCLE_SIZE = 25 * REF_RATIO;
export const DAY_CIRCLE_RADIUS = Math.round(DAY_CIRCLE_SIZE / 2);
export const LINE_HEIGHT = CUSTOM_DAY_HEIGHT / 2;
export const LINE_WIDTH = CUSTOM_DAY_WIDTH / 2;
export const LINE_WIDTH_RADIUS = Math.round(LINE_WIDTH / 2);
export const FIX_MARGIN_SIZE = 2;
