export default theme => ({
  imageWrapper: {
    width: '4rem',
    height: '4rem',
    borderRadius: '0.3125rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  details: {
    display: 'flex',
    marginBottom: '1rem'
  },
  locationDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  siteDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  description: {
    lineHeight: '1.3rem',
    overflow: 'auto',
    height: '7.5rem',
    textOverflow: 'ellipsis',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  card: {
    maxWidth: '46.875rem',
    maxHeight: '15.625rem',
  },
  title: {
    fontSize: '16px',
    marginLeft: '0.625rem',
    fontWeight: '600'
  },
  name: {
    fontSize: '14px',
    marginLeft: '0.625rem',
  },
  location: {
    fontWeight: 100,
    fontSize: 14,
    marginLeft: '0.625rem'
  },
  avatar: {
    marginLeft: 'auto',
    width: '100%',
    height: '100%',
    flexShrink: 0,
    flexGrow: 0,
    backgroundColor: '#ffc107'
  },
  icon: {
    color: 'gray',
    height: '1.1rem',
  },
  site: {
    color: 'gray',
    height: '1.7rem',
  }
});
