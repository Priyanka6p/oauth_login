import { GoogleOAuthProvider } from '@react-oauth/google';
import SignIn from './component/SignIn';

function App() {
  return (
    <GoogleOAuthProvider clientId="629815925993-6t2mj73aoeek1f5klg5h3hueeunp1jel.apps.googleusercontent.com">
      {<SignIn/>}
    </GoogleOAuthProvider>
  );
}

export default App;