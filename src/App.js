import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        faris rayhan
      </header>
        <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App)
