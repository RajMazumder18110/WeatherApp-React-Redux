import WeatherContainer from './components/WeatherContainer'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store= { store }>
      <main>
        <WeatherContainer />
      </main>
    </Provider>
  );
}

export default App;
