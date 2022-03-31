import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './components/context/ThemeContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideoList: [],
    activeTab: 'HOME',
    isMobileView: false,
  }

  toggleMenuOnMobileView = () => {
    this.setState(preState => ({isMobileView: !preState.isMobileView}))
  }

  activeTabItem = item => {
    this.setState({activeTab: item})
  }

  toggleTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  removeSavedVideo = id => {
    const {savedVideoList} = this.state
    const updatedVideos = savedVideoList.filter(eachItem => eachItem.id !== id)
    this.setState({
      savedVideoList: updatedVideos,
    })
  }

  addToSavedVideoList = videos => {
    const {savedVideoList} = this.state
    const videoObject = savedVideoList.find(
      eachVideoItem => eachVideoItem.id === videos.id,
    )
    if (videoObject) {
      this.setState(preState => ({
        savedVideoList: [...preState.savedVideoList],
      }))
    } else {
      const updatedVideoList = [...savedVideoList, videos]
      this.setState({savedVideoList: updatedVideoList})
    }
  }

  render() {
    const {isDarkTheme, savedVideoList, activeTab, isMobileView} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideoList,
          toggleTheme: this.toggleTheme,
          addToSavedVideoList: this.addToSavedVideoList,
          removeSavedVideo: this.removeSavedVideo,
          activeTab,
          activeTabItem: this.activeTabItem,
          isMobileView,
          toggleMenuOnMobileView: this.toggleMenuOnMobileView,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
