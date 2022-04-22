import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = (props) => {            

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <div class='app-wrapper-content'>
          <Switch>

            <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>

            <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
              
            <Route path='/news' render={ () => <News/> }/>
            <Route path='/music' render={ () => <Music/> }/>
            <Route path='/settings' render={ () => <Settings/> }/>
            <Route path='/sidebar' render={ () => <Sidebar state={props.state.sidebarData} /> }/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>  
  )
}

export default App;
