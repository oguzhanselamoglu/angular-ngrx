
import { createReducer, on } from "@ngrx/store";
import { Hoteldto } from "src/app/hotel/models/hotelDto";
import { addHotel, removeHotel } from "../actions/hotel.action";

export const appFeatureKey = 'app'
//State Type
export interface IState {
  data: Hoteldto[];
}

//Initial State
export const initialHotelState: IState = {
  data: Array<Hoteldto>()
}

//Reducer
export const hotelReducer = createReducer(initialHotelState,
  on(addHotel, (state, hotel) => {
    const newState: IState = {
      data: [...state.data, hotel]
    }
    return newState;
  }),
  on(removeHotel, (state, hotel) => {
    const newState: IState = {
      data: [...state.data]
    };
    const deleteHotel = state.data.find(l => l.id === hotel.id);
    if (deleteHotel) {
      const deleteHotelIndexNo = state.data.indexOf(deleteHotel, 0);

      newState.data.splice(deleteHotelIndexNo, 1);
    }
    return newState;
  })
);
