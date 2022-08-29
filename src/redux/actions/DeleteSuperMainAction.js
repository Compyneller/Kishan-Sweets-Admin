import axios from "axios";
export const DeleteSuperMainAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_TABLE_REQUEST" });
    console.log(id);
    const body = new FormData();

    body.append("api", "sdgfwp49f4923d3287slhgw");
    body.append("mcat_id", id);
    const { data } = await axios.post(
      "https://sadmin.kishansweets.com/adminapi/super_mcat_del.aspx",
      body
    );
    console.log(data);
    dispatch({
      type: "DELETE_TABLE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TABLE_FAIL",
      payload: error,
    });
  }
};
