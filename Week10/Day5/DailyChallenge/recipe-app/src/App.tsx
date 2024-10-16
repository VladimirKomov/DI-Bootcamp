import './App.css'
import DataFetcher from "./components/DataDisplayComponent";
import {Provider} from "react-redux";
import {store} from "./features/dataStore.ts";

function App() {

    return (
        <>
            <Provider store={store}>
                <DataFetcher/>
            </Provider>
        </>
    )
}

export default App
