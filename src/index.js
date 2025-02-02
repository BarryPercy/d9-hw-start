import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store, persistedStore} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>
)
