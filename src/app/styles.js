import { StyleSheet } from 'react-native';

import {
  colorBackground,
  colorFill,
  colorTextRegular,
  colorTextHighlighted,
  transparent,
  toastWordsColor,
  colorPrimary,
  colorEventRuleBackground
} from '../constants/colors';
import { isIos, REF_RATIO } from '../constants/platform';
import {
  MARGIN_TINY,
  ICON_SIZE_SMALL,
  FONT_SIZE_BIG,
  TAB_BAR_HEIGHT,
  TAB_BAR_HEIGHT_SMALL,
  TAB_BAR_HEIGHT_XSMALL,
  FONT_SIZE_SMALL,
  MARGIN_BIG,
  MARGIN_SMALL,
  INDICATOR_HEIGHT,
  INDICATOR_WIDTH
} from '../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toastStyle: {
    color: toastWordsColor
  },
  navTitle: {
    color: colorBackground,
    fontSize: FONT_SIZE_BIG,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  tabBar: {
    backgroundColor: colorBackground,
    height: TAB_BAR_HEIGHT
  },
  vehiclesTabBar: {
    backgroundColor: colorFill,
    height: TAB_BAR_HEIGHT_SMALL
  },
  tabbarIcon: {
    height: ICON_SIZE_SMALL,
    width: ICON_SIZE_SMALL,
    marginBottom: isIos * MARGIN_TINY
  },
  tabbarLabel: {
    textAlign: 'center',
    marginBottom: MARGIN_TINY,
    fontSize: FONT_SIZE_SMALL
  },
  tabbarFocused: {
    fontWeight: 'bold',
    color: colorTextHighlighted
  },
  tabbarNoFocused: {
    fontWeight: 'normal',
    color: colorTextRegular
  },
  tabBarElementGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  segmentControl: {
    backgroundColor: transparent,
    height: TAB_BAR_HEIGHT,
    paddingHorizontal: MARGIN_BIG,
    paddingVertical: MARGIN_SMALL
  },
  indicatorStyle: {
    backgroundColor: colorPrimary,
    width: INDICATOR_WIDTH,
    height: INDICATOR_HEIGHT,
    position: 'absolute',
    bottom: 0
  },
  indicatorWide: {
    width: '100%'
  },
  indicatorWideSmall: {
    width: '15%',
    height: 1
  },
  vehicleProfile: {
    height: 204 * REF_RATIO
  },
  rulesTabBar: {
    backgroundColor: colorBackground,
    height: TAB_BAR_HEIGHT_XSMALL,
    borderTopWidth: 0,
    elevation: 0
  },
  rulesIndicatorStyle: {
    backgroundColor: colorPrimary,
    height: 1
    // TODO research how can fix android indicator to have same ios behaviour.
  },
  whiteBackground: {
    backgroundColor: colorEventRuleBackground
  },
  customSubtitleGreen: {
    color: colorPrimary
  },
  billableEntityProfileSubtitle: {
    fontSize: FONT_SIZE_BIG,
    paddingTop: MARGIN_TINY
  }
});

export default styles;