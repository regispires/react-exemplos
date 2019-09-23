export default theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginLeft: 'auto'
  },
  inputField: {
    margin: theme.spacing(1),
    flexBasis: 200,
  },
  site: {
    color: 'gray',
    height: '1.1rem',
    marginRight: theme.spacing(1)
  },
});
