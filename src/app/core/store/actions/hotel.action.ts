import { createAction, props } from "@ngrx/store";
import { Hoteldto } from "src/app/hotel/models/hotelDto";


//Action Type
export const ADD_HOTEL = '[ADD HOTEL] Hoteldto';

//Action Type
export const REMOVE_HOTEL = '[REMOVE HOTEL] Hoteldto';

//Action
export const addHotel = createAction(ADD_HOTEL, props<Hoteldto>());

//Action
export const removeHotel = createAction(REMOVE_HOTEL, props<Hoteldto>());
