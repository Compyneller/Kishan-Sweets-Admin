export const SuperMainCatTableReducer = (state = { tableDate: [] }, action) => {
  switch (action.type) {
    case "FETCH_TABLE_REQUEST":
      return { loading: true, tableData: [] };
    case "FETCH_TABLE_SUCCESS":
      return {
        loading: false,
        tableDate: action.payload,
      };
    case "FETCH_TABLE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
