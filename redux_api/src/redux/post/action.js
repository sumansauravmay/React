import axios from "axios";
import { POSTDATA, POSTDATAERROR, POSTDATALOADING } from "./type";

const postdata = (payload) => {
  return { type: POSTDATA, payload };
};
const postdataloading = () => {
  return { type: POSTDATALOADING };
};
const postdataerror = () => {
  return { type: POSTDATAERROR };
};

export const postdatalogin = (payload) => (dispatch) => {
  dispatch(postdataloading());
  axios
    .post("https://render-depoy.onrender.com/login", payload)
    .then((res) => {
      dispatch(postdata(res.data));
      console.log("res", res.data);
    })
    .catch((err) => {
      dispatch(postdataerror);
      console.log(err);
    });
};
