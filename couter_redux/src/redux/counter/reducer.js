import { DEC, INC, RESET } from "./type";

const val = {
  count: 0,
};

export const reducer = (state = val, { type, payload }) => {
  switch (type) {
    case INC: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DEC: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    case RESET:{
        return {
            count:0
        }
    }
    default: {
      return state;
    }
  }
};
