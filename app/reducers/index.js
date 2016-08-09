import { combineReducers } from 'redux';
import { routerReducers} from 'react-router-redux';
import messages from './messages';
import auth from './auth';
import regime from './regime';
import profile from './profile';
import goals from './goals'
import supplement from './supplements';
import feed from './feed'
import favresource from './favresource'


export default combineReducers({
  messages,
  auth,
  profile,
  regime,
  goals,
  supplement,
  feed,
  favresource
});
