export default theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: 700,
    fontSize: '20px'
  },
  value: {
    marginTop: theme.spacing.unit
  },
  iconWrapper: {
    alignItems: 'center',
    borderRadius: '50%',
    display: 'inline-flex',
    height: '4rem',
    justifyContent: 'center',
    marginLeft: 'auto',
    width: '4rem'
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: '2rem',
    height: '2rem',
    width: '2rem'
  },
  footer: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center'
  },
  difference: {
    alignItems: 'center',
    color: theme.palette.success.dark,
    display: 'inline-flex',
    fontWeight: 700
  },
  caption: {
    marginLeft: theme.spacing.unit
  },
  channelIcon: {
    width: '50px',
    height: '50px'
  },
  adjustIcon: {
    color: '#00a680',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  },
  rating: {
    marginTop: '16px',
    marginBottom: '40px'
  }
});
