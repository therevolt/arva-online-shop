const initialstate={
    message : ""
}

const Test = (state = initialstate, action)=>{
    switch(action.type){
        case 'TEST' :
            return {message: action.message}
        default : return state
    }
}

export default Test
