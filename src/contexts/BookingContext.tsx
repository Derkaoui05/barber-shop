// src/contexts/BookingContext.tsx

"use client";

import { createContext, useContext, useReducer } from "react";
import { type Booking, type Service } from "@/types";

type BookingState = {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
};

type BookingAction =
  | { type: "SELECT_SERVICE"; payload: Service }
  | { type: "SELECT_DATE"; payload: Date }
  | { type: "SELECT_TIME"; payload: string }
  | { type: "SET_CUSTOMER_INFO"; payload: Partial<BookingState['customerInfo']> }
  | { type: "RESET_BOOKING" };

const initialState: BookingState = {
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  customerInfo: {
    name: "",
    email: "",
    phone: "",
  },
};

const BookingContext = createContext<{
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
} | undefined>(undefined);

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "SELECT_SERVICE":
      return { ...state, selectedService: action.payload };
    case "SELECT_DATE":
      return { ...state, selectedDate: action.payload, selectedTime: null };
    case "SELECT_TIME":
      return { ...state, selectedTime: action.payload };
    case "SET_CUSTOMER_INFO":
      return { 
        ...state, 
        customerInfo: { ...state.customerInfo, ...action.payload } 
      };
    case "RESET_BOOKING":
      return initialState;
    default:
      return state;
  }
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}