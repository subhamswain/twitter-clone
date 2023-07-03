import {configureStore} from '@reduxjs/toolkit'
import localDatas from './dataslice'

const store = configureStore({
    reducer:{
        localData:localDatas,
        

    }
})
export default store