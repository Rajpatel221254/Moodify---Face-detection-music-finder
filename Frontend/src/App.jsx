import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context'
import AppContent from './AppContent'

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
