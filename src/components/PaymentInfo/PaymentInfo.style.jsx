export const s = {
  mainBox: {
    borderRadius: '22px',
    border: '2px solid rgb(200, 213, 229, 0.64)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: { xs: '45px', sm: '45px', md: '90px' },
    alignItems: 'center',
    justifyContent: 'center',
  },

  paymentsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', sm: 'center', md: 'start' },
    alignItems: 'start',

    gap: '20px',
    margin: '20px',
    marginTop: '10px',
    width: { xs: '300px', sm: '500px', md: '700px' },
    padding: 0,
  },

  activeListItem: {
    width: '200px',
    height: '100px',
    backgroundColor: '#936397',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '10px',
    padding: '14px 10px 14px 10px',
    cursor: 'pointer',
    transition: 'all 300ms',
  },

  listItem: {
    width: '200px',
    height: '100px',
    backgroundColor: '#bfcddf',
    borderRadius: '15px',
    opacity: '64%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '10px',
    padding: '14px 10px 14px 10px',
    cursor: 'pointer',
    transition: 'all 300ms',
    ':hover': {
      backgroundColor: '#936397',
      opacity: 1,
    },
  },
  cardBox: {
    width: '430px',
    backgroundColor: '#bfcddf',
    borderRadius: '15px',
    opacity: '64%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
    margin: '20px',
    marginTop: '10px',
  },

  titles: {
    marginLeft: { xs: '0px', sm: '0px', md: '22px' },
    textAlign: { xs: 'center', sm: 'center', md: 'start' },
    fontSize: 16,
    color: '#bbbbbb',
    marginTop: '25px',
    marginBottom: '2px',
    fontWeight: '700',
  },

  cardNumberBox: {
    padding: '0px 24px 8px 24px',
  },
  cardNumberInputBox: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumberBoxInput: {
    height: '38px',
    backgroundColor: '#bfcddf',
    borderRadius: 6,
  },

  cardNumberOtherInfoBox: {
    display: 'flex',
    gap: '10px',
  },

  timeBox: {
    padding: '0px 30px 24px 24px',
  },
  cvvBox: {
    padding: '0px 24px 24px 30px',
  },
  cardNumberOtherInfoInput: {
    height: '38px',
    backgroundColor: '#f3f6fb',
    borderRadius: '7px',
  },

  cardNumberBoxTitle: {
    color: '#fff',
    textAlign: 'start',
    paddingTop: '23px',
    paddingBottom: '6px',
    fontSize: 15,
    fontWeight: '600',
  },

  visaMasterBox: {
    display: 'flex',
    width: '100px',
    gap: '15px',
  },

  listItemText: {
    color: '#fff',
    fontSize: '14px',
  },
  privatLogo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: '8px',
  },
};
