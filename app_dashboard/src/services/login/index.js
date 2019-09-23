import axios from 'axios';

class LoginService {

  static async login(credentials) {
    return await axios.post('http://localhost:3001/api/user/login', credentials)
      .then(response => response.data)
      .catch(error => {
        console.error('Error during login:', error);
      });
  }

}

export default LoginService;
