import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  widgetWrapper: {
    display: "flex",
    minHeight: "100%",
  },

  widgetBody: {
    padding: '1rem',
  },
  
  noPadding: {
    padding: 0,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "auto",
    padding: 22,
  },

  moreButton: {
    margin: '2rem',
    padding: 0,
    width: 40,
    height: 40,
    color: '#444',
    "&:hover": {
      backgroundColor:'#444',
      color: "rgba(255, 255, 255, 0.35)",
    },
  },
  noWidgetShadow: {
    boxShadow: "none",
  },
  mb_one: {
    marginBottom: "1rem",
  },
  mr_one: {
    marginRight: "1rem",
  },
  table_scroll: {
    height: 500,
    overflow: "scroll",
    marginRight: "1rem",
  },
  //  Expand Collaps
  expand: {
    transform: "rotate(0deg)",
    marginLeft: ".5rem",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

}));
