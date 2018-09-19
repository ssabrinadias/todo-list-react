const INITIAL_STATE = {value: 'estou funcionando...'}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case 'CHANGE_SAUDACAO':
            return {
                value: 'teste'
            }
        default:
            return state
    }
}