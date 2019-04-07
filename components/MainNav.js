import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabNav from '../components/TabNav'; 
import EntryDetail from '../components/EntryDetail'; 
import { purple, white } from '../utils/colors';



const MainNav = createStackNavigator({
    home: {
      screen: TabNav,
      navigationOptions: {
        header: null,
      },
    },
    EntryDetail: {
      screen: EntryDetail,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }),
    },
  });


  export default createAppContainer(MainNav);