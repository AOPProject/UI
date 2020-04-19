import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  props: {
    MuiAppBar: {
      // Name of the rule
      style: {
        background: '#202830',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: 'gray',
      }
    },
    MuiTable: {
      style: {
        minWidth: 700
      }
    },
    MuiPaper: {
      style: {
        margin: 24,
        overflowX: 'auto'
      }
    }
  },
});
