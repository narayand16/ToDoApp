import { createAction, props } from "@ngrx/store";
import { IToDo } from "../models/todo.model";

export const GetToDoList = createAction('[ToDo] Get ToDo List');

export const addToDo = createAction('[ToDo] Add ToDo', props<{ todo: IToDo }>());