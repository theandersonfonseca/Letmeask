import { DefaultTheme, ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import usePersistedState from './hooks/usePersistedState'
import ThemeSwitcher from './components/ThemeSwitcher'

import { Toaster } from 'react-hot-toast'

import Home from './pages/Home'
import NewRoom from './pages/NewRoom'
import Room from './pages/Room'
import AdminRoom from './pages/AdminRoom'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContextProvider>
          <ThemeSwitcher toggleTheme={toggleTheme} />

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
