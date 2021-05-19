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
  fav_icon: {
    width: '30px',
    height: '30px',
  },
  userFavButton: {
    width: '50px',
    height: '50px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #999999',
    borderRadius: '25px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceArea: {
    marginTop: '30px',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#268596',
    marginLeft: '30px',
    marginBottom: '20px'
  },
  serviceItem:{
    flexDirection: 'row',
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '20px',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#268596',
  },
  servicePrice: {
    fontSize: '14px',
    color: '#268596',
  },
  serviceChooseButton: {
    backgroundColor: '#4EADBE',
    borderRadius: '10px',
    padding: '10px',
  },
  serviceChooseButtonText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  testimonialArea: {
    marginTop: '30px',
    marginBottom: '50px',
  },
  swiperConfig: {
    height: 110,
  },
  testimonialIcon: {
    width: 35,
    height: 35,
  },
  testimonialItem: {
    backgroundColor: '#268596',
    padding: '15px',
    borderRadius: '10px',
    height: '110px',
    justifyContent: 'center',
    marginLeft: '50px',
    marginRight: '50px'
  },
  testimonialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  testimonialName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  testimonialBody: {
    color: '#FFFFFF',
    fontSize: '13px',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
    paddingTop: '10px',
    paddingLeft: '10px'
  },
  loadingIcon: {
    marginTop: '50px'
  },
});