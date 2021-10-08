// adding an aria label to a Radio button

<Radio inputProps={{ "aria-label": "descriptive label" }} />;

// adding an aria label to a TextField

<TextField inputProps={{ "aria-label": "descriptive label" }} />;

// adding an aria label to a TextField if you already have InputProps as a prop

<TextField
  variant="outlined"
  size="small"
  label="Label for TextField"
  InputProps={{
    endAdornment: <Search />,
    inputProps: {
      "aria-label": "descriptive label",
    },
  }}
/>;
