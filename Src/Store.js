import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import Reducers from './Reducers/index'

const PersistConfig = {
    key : 'root',
    storage : AsyncStorage,
    stateReconciler : hardSet
}

const pReducer = persistReducer(PersistConfig, Reducers)
const Store = createStore(pReducer)
const Persistor = persistStore(Store)

export { Store, Persistor }