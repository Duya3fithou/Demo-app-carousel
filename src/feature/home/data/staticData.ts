import { Dimensions } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.2);

export { SLIDER_WIDTH, ITEM_WIDTH, ITEM_HEIGHT };
