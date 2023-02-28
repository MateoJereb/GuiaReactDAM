import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
        marginLeft: 80,
        marginRight: 40,
      },

      titleBackground: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
      },

      titleItem:{
        width: 24,
        height: 24,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#0F80AE',
        position: 'absolute',
        marginTop:54,
        marginLeft: 40
      },

      cantTasks:{
        fontSize: 14,
        color: '#959494',
        marginLeft: 80,
        marginRight: 40,
        marginTop: 5,
      },

      background: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
      },

      header: {
        borderBottomColor: 'white',
        backgroundColor: 'white',
      },

      primerButton: {
        backgroundColor: 'white',
        borderWidth: 0,
        position:'absolute',
        top: 18,
        right: 40,
      },

      segundoButton: {
        backgroundColor: 'white',
        borderWidth: 0,
        position:'absolute',
        top: 10,
        right: 80
      },
      
      buttonCheckText: {
        color: 'gray',
        fontSize: 20,
      },

      buttonText: {
        color: 'gray',
        fontSize: 24,
      },

      scrollView:{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 40
      },

      nuevaTarea:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
        marginLeft: 75,
        marginRight: 40,
      }
});