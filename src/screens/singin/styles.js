import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#63C2D1',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 160,
        height: 160,
        margin: 20
    },
    inputArea: {
      padding: '40px',
      width: '100%'
    },
    customButton: {
      height: '60px',
      backgroundColor: '#268596',
      borderRadius: '30px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    customButtonText: {
      fontSize: '18px',
      color: '#FFF'
    },
    signMessageButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '50px',
      marginBottom: '20px'
    },
    signMessageButtonText: {
      fontSize: '16px',
      color: '#268596'
    },
    signMessageButtonTextBold: {
      fontSize: '16px',
      color: '#268596',
      fontWeight: 'bold',
      marginLeft: '5px'
    }
  });