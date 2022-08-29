import axios from "axios";
export const SuperMainCatTableAction = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_TABLE_REQUEST" });
    const body = new FormData();
    body.append("sector", "RESTAURENT");
    body.append("api", "sdgfwp49f4923d3287slhgw");

    const { data } = await axios.post(
      "https://sadmin.kishansweets.com/adminapi/mcatlist.aspx",
      body
    );
    dispatch({
      type: "FETCH_TABLE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_TABLE_FAIL",
      payload: error,
    });
  }
};
