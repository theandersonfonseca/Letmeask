import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

import { Toaster } from 'react-hot-toast'

import Home from './pages/Home'
import NewRoom from './pages/NewRoom'
import Room from './pages/Room'
import AdminRoom from './pages/AdminRoom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
          <Toaster />
        </AuthContextProvider>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
