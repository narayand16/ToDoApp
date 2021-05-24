import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState } from "./to-do.reducer";

const getToDoSelector = createFeatureSelector<ToDoState>('todo');

export const getToDoList = createSelector(
    getToDoSelector, state => state.todo ? state.todo : []
)