import { ACCESS_MODE} from "../Constant";

const loginreducer=(state="abc" , action)=>{
    switch(action.type)
    {
       case "ACCESS_MODE": 
         state=action.payload;
         console.log(" access mode : ============ "+state)
         return state;

        default:
          return state;
    }
}

export default loginreducer;