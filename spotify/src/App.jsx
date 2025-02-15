
import {getAuthUrl} from './utils/auth.js'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'

// import useAuth from './hooks/useAuth.js'

const code = new URLSearchParams(window.location.search).get('code')

const AUTH_URL = getAuthUrl()

// Context
import UserProvider from './context/UserContext.jsx'
import AuthProvider from './context/AuthContext.jsx'
import SpotifyApiProvider from './context/SpotifyApiContext.jsx'

function App() {
	return (
		<>
			{code ?
			<AuthProvider code={code}>
				<SpotifyApiProvider>
					<UserProvider>
						<Dashboard />
					</UserProvider>
				</SpotifyApiProvider>
			</AuthProvider>

			: <Login auth_url={AUTH_URL}/>
			}
		</>
	)
}

export default App
