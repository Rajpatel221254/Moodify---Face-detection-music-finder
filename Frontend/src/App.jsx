import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context'
import AppContent from './appContent'

const App = () => {

  return (
    <AuthProvider>
      <SongContextProvider>
      <AppContent />
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App
