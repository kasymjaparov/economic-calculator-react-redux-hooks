import {constants} from './constants'
import shortid from 'shortid'

const initialState ={ income:[], expence:[] }

export let reducer = (state = initialState, action) => {
switch(action.type) {
    case constants.ADD_INCOME_TODO:
     return {
         ...state,
         income:[
             ...state.income,{
             text:action.data.text,
             money:action.data.money,
             id:shortid.generate()
             }]
     }

     case constants.ADD_EXPENCE_TODO:
        return {
            ...state,
            expence:[
                ...state.expence,{
                text:action.data.text,
                money:action.data.money,
                id:shortid.generate()
                }]
        }

        case constants.DELETE_EXPENCE_TODO:
            let newExpence = [...state.expence]
            return {...state,expence:newExpence.filter(todo=>todo.id!==action.payload)}
             
    
        case constants.DELETE_INCOME_TODO:
            let newIncome = [...state.income]
            return {...state,income:newIncome.filter(todo=>todo.id!==action.payload)}
             
    default: 
    return state 
}
}