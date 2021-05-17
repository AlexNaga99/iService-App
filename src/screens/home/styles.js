import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63C2D1',
    flex: 1,
  },
  icon: {
    height: 20,
    width: 20
  },
  scroller: {
    padding: '20px',
  },
  headerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    width: '250px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFF'
  },
  searchButton: {
    width: '26px',
    height: '26px'
  },
  locationArea: {
    backgroundColor: '#4EADBE',
    height: '60px',
    borderRadius: '30px',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '30px'
  },
  locationInput: {
    flex: 1,
    fontSize: '16px',
    color: '#FFFFFF'
  },
  locationFinder: {
    height: '24px',
    height: '24px'
  },
  loadingIcon: {
    marginTop: '50px'
  },
  listArea: {
    marginTop: '30px',
    marginBottom: '30px'
  }
});