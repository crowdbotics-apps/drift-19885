import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95668Navigator from '../features/UserProfile95668/navigator';
import Settings95667Navigator from '../features/Settings95667/navigator';
import Settings95665Navigator from '../features/Settings95665/navigator';
import SignIn295663Navigator from '../features/SignIn295663/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95668: { screen: UserProfile95668Navigator },
Settings95667: { screen: Settings95667Navigator },
Settings95665: { screen: Settings95665Navigator },
SignIn295663: { screen: SignIn295663Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
