import React from 'react';
import {
    EVENT_CREATE,
    EVENT_FAILED,
    EVENT_SUCCESS,
    EVENT_NAME,
    EVENT_CATEGORY,
    EVENT_DESCRIPTION,
    EVENT_PHONE_NUMBER,
    EVENT_ADD1,
    EVENT_ADD2,
    EVENT_DATE,
    EVENT_TIME,
    EVENT_RESERVATION,
    EVENT_IMG1,
    EVENT_IMG2,
    EVENT_IMG3,
    EVENT_IMG4
} from "../constants";

const initialState = {
    Success:false,
    Failed:false,
    Loader:false,
    EventName:"",
    EventCategory:"",
    EventDescription:"",
    EventPhoneNumber:"",
    EventAdd1:"",
    EventAdd2:"",
    EventDate:new Date(),
    // EventTime:new Date(),
    EventReservation:0,
    EventImg:[],
    // EventImg2:null,
    // EventImg3:null,
    // EventImg4:null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EVENT_CREATE:
            return { ...state, Loader:true,  };

        case EVENT_FAILED:
            return { ...state, Loader:false, Failed:true };
            
        case EVENT_SUCCESS:
            return { ...state, Loader:false, Failed:false, Success:true, ...initialState };

        case EVENT_NAME:
            return { ...state, EventName:action.payload };

        case EVENT_CATEGORY:
            return { ...state, EventCategory:action.payload };
    
        case EVENT_PHONE_NUMBER:
            return { ...state, EventPhoneNumber:action.payload };

        case EVENT_DESCRIPTION:
            return { ...state, EventDescription:action.payload  };

        case EVENT_DATE:
            return { ...state, EventDate:action.payload };

        // case EVENT_TIME:
        //     return { ...state, EventTime:action.payload };

        case EVENT_ADD1:
            return { ...state, EventAdd1:action.payload };

        case EVENT_ADD2:
            return { ...state, EventAdd2:action.payload };

        case EVENT_RESERVATION:
            return { ...state, EventReservation:action.payload };

        case EVENT_IMG1:
            return { ...state, EventImg:action.payload};

        // case EVENT_IMG2:
        //     return { ...state, EventImg2:action.payload };

        // case EVENT_IMG3:
        //     return { ...state, EventImg3:action.payload };

        // case EVENT_IMG4:
        //     return { ...state, EventImg4:action.payload  };

        
        default:
            return state;
    }
}