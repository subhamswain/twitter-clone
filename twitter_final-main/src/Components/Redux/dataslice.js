
import {createSlice} from '@reduxjs/toolkit'


const dataSlice = createSlice({
    initialState:{
        localDatas:[],
        objectData:[],
        arrayData:[],
        userData:"",
        isLoggedIn:false,
        isLoggedIn1:false,
        day:"",
        month:"",
        year:"",
        tweeterUserName:[{name1:""}]

        
    },
    name:"localData",
    reducers:{
        addData:(state,action)=>{
        
          state.localDatas=action.payload
        
        },
        addObjectData:(state,action)=>{
            // console.log(action.payload,"this is action")
        

         
        },
        addUserChange:(state,action)=>{
            state.userData=action.payload
            state.tweeterUserName=action.payload
            localStorage.setItem("UserName",state.tweeterUserName)
             },
        checkLoggedIn:(state,action)=>{
            
            const loca1=action.payload
            const valuesofuser = loca1.flat()
            const asUser = state.userData
            // console.log(valuesofuser,"this this this")
            // console.log(asUser,"lkajoeia")
        const findUser= valuesofuser.filter(ele=> ele.name1===asUser || ele.number1===asUser || ele.email1===asUser)
            // console.log(findUser,"i found it")
            
            if(findUser.length!==0){
                state.isLoggedIn=true
                // console.log("it is true")
            }
            else{
                alert("please registered first")
                
            }
            state.tweeterUserName=findUser
            console.log(state.tweeterUserName," i am tweet user")
     

        },
        isloggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
            state.isLoggedIn1=!action.payload
        },
        addDay:(state,action)=>{
     state.day = action.payload
     console.log(state.day)
        },
        addMonth:(state,action)=>{
      state.month = action.payload
      console.log(state.month)
        },
        addYear:(state,action)=>{
            state.year = action.payload
            console.log(state.year)

        },
        addArrayData:(state,action)=>{
            console.log(action.payload,"this tis tweet")
            state.arrayData = action.payload
        }





    }

})

export const {addData,addObjectData,addUserChange,checkLoggedIn,isloggedIn,addDay,addMonth,addYear,addArrayData} = dataSlice.actions
export default dataSlice.reducer
