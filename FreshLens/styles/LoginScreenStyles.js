import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2B48C', // Tan background color from figma
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Makes it circular
    overflow: 'hidden', // Clips the image
    marginBottom: 10, // Spacing between logo and title
  },
  title: {
    fontSize: 65, // Larger font size for emphasis
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Jomhuria',
  },
  form: {
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'left',
    fontFamily: 'Jomhuria', // Apply custom font
  },
  // for username and password input fields
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 25,
    textAlign: 'center', // Centered text
    fontFamily: 'Jomhuria', 
  },
  loginButton: {
    backgroundColor: '#6b8e23', // Olive green color
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'Jomhuria', 
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  // for signup and forgot password links
  link: {
    color: '#6b8e23',
    fontSize: 25,
    textDecorationLine: 'underline',
    fontFamily: 'Jomhuria', 
  },
});

export default styles;