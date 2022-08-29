export const DeleteSuperMainReducer = (state = { tableDate: [] }, action) => {
  switch (action.type) {
    case "DELETE_TABLE_REQUEST":
      return { loading: true, tableData: [] };
    case "DELETE_TABLE_SUCCESS":
      return {
        loading: false,
        tableDate: action.payload,
      };
    case "DELETE_TABLE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
