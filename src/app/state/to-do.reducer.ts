import { createReducer, on } from "@ngrx/store";
import { IToDo } from "../models/todo.model";
import { addToDo, GetToDoList } from "./to-do.action";

export interface ToDoState {
    todo: IToDo[];
    error?: string;
}

const initialState: ToDoState = {
    todo: [],
    error: ''
}


export const toDoReducer = createReducer(
    initialState, 
    on(GetToDoList, (state) => ({
        ...state
    })),
    on(addToDo, (state, prop) => ({
        ...state, todo: [...state.todo, prop.todo]
    }))
    );