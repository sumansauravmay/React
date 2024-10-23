import { dataget, dataloading, dataerror } from "./type";
import axios from "axios";

const getloading = () => {
  return { type: dataloading };
};
const geterror = () => {
  return { type: dataerror };
};
const getdata = (payload) => {
  return { type: dataget, payload };
};

export const logindata = (payload) => async (dispatch) => {
  dispatch(getloading());
  return axios
    .get("https://render-depoy.onrender.com/login")
    .then((res) => {
      dispatch(getdata(res.data));
      console.log("data", res.data);
    })
    .catch((err) => {
      dispatch(geterror());
      console.log(err)
    });
};
