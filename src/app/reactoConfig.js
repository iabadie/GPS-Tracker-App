import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron.configure()
  .use(reactotronRedux())
  .useReactNative({ asyncStorage: true })
  .connect();
