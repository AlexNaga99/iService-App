import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scroller: {
    flex: 1,
  },
  fakeSwiper: {
    height: '140px',
    backgroundColor: '#63C2D1'
  },
  pageBody: {
    minHeight: '400px',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '50px',
    marginTop: '-50px',
    padding: '20px'
  },
  profileTitle: {
    paddingLeft: '50px',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '10px',
    color: '#FFFFFF'
  },
  profileSubTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    colo: '#000000',
    textAlign: 'left',
    paddingBottom: '20px',
  },
  fav_icon: {
    width: '30px',
    height: '30px',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
    paddingTop: '10px',
    paddingLeft: '10px'
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    marginTop: '20px',
    backgroundColor: '#4EADBE',
    width: '100%',
    padding: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    alignSelf: 'left',
  },
  saveButtonText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});