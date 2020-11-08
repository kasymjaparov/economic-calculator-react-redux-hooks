import {constants} from './constants'

export const addIncome = (data) => ({
    type:constants.ADD_INCOME_TODO,
    data })

    export const addExpence = (data) => ({
        type:constants.ADD_EXPENCE_TODO,
        data })

     export const deleteExpence = (todoId) => ({
           type: constants.DELETE_EXPENCE_TODO,
          payload:todoId
        })

        export const deleteIncome = (todoId) => ({
            type: constants.DELETE_INCOME_TODO,
           payload:todoId
         })
 

      
     
     