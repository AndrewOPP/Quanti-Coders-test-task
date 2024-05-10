export const s = {
  list: {
    display: 'flex',
    flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap' },
    justifyContent: 'center',
    gap: { xs: '10px', sm: '20px', md: '30px' },
    paddingBottom: { xs: '30px' },
    marginTop: '10px',
  },

  iconWrapper: {
    width: '110px',
    height: '110px',
    borderRadius: '14px',
    border: '2px solid #c8d5e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 300ms',
  },

  activeIconWrapper: {
    width: '110px',
    height: '110px',
    borderRadius: '14px',
    border: '2px solid #936397',
    backgroundColor: '#936397',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 300ms',
  },

  supportType: {
    fontSize: '19px',
    fontWeight: '800',
    color: '#c8d5e5',
    width: '100px',
    marginLeft: '8px',
    transition: 'all 300ms',
  },

  activeSupportType: {
    fontSize: '19px',
    fontWeight: '800',
    color: '#373d60',
    width: '100px',
    marginLeft: '8px',
    transition: 'all 300ms',
  },

  icon: { fontSize: 60, color: '#c8d5e5', transition: 'all 300ms' },
  activeIcon: { fontSize: 60, color: '#ffffff', transition: 'all 300ms' },

  listItem: {
    width: { xs: '300px', sm: '300px', md: '280px' },
    display: 'flex',
    gap: '10px',
    margin: 3,
    fontWeight: '600',

    '&:hover': {
      cursor: 'pointer',
      '& .iconWrapper': {
        backgroundColor: '#936397',
        borderColor: '#936397',
      },
      '& .iconSupportType': {
        color: '#ffffff',
      },
      '& .iconSupportTypeText': {
        color: '#373d60',
      },
    },
  },
};
