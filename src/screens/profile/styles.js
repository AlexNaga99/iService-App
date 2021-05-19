import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
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
  profileTitle: {
    paddingLeft: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '20px',
    color: '#FFFFFF'
  },
  pageBody: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '50px',
    marginTop: '-50px',
    padding: '20px'
  },
  userInfoArea: {
    flexDirection: 'row',
  },
  userInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  userInfoText: {
    color: '#000000',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  profileChooseButton: {
    backgroundColor: 'red',
    borderRadius: '10px',
    padding: '10px',
  },
  profileChooseButtonText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileOptionsButton: {
    backgroundColor: '#4EADBE',
    padding: '10px',
    marginTop: '20px',
  },
  profileOptionsButtonText: {
    fontSize: '20px',
    color: '#FFFFFF',
  },
  createServiceButton: {
    marginTop: '20px',
    backgroundColor: '#4EADBE',
    width: 'auto',
    padding: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    alignSelf: 'left',
  },
  createServiceButtonText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dataTextTitle: {
    fontSize: '20px',
    color: '#000000',
    marginTop: '10px',
  },
  dataText: {
    fontSize: '16px',
    color: '#000000',
  },
});