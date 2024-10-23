import { dataerror, dataget, dataloading } from "./type";

const initialdata = {
  data: [],
  iserror: false,
  isloading: false,
};
export const getreducer = (state = initialdata, { type, payload }) => {
  switch (type) {
    case dataloading: {
      return {
        ...state,
        isloading: true,
      };
    }
    case dataget: {
      return {
        ...state,
        isloading: false,
        iserror: false,
        data: payload,
      };
    }
    case dataerror: {
      return {
        ...state,
        isloading: false,
        iserror: true,
      };
    }
    default: {
      return state;
    }
  }
};
