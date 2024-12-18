
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.js'
import {Provider} from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
<Provider store={store}>
    <App />
 </Provider>
)
