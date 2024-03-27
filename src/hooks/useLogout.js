import { useContext } from 'react';
import { Alert } from 'react-native';
import AuthContext from '../context/AuthContext'; 

const useLogout = () => {
  const { toggleLogin } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log-out',
      [
        {
          text: 'Yes',
          onPress: toggleLogin,
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return handleLogout;
};

export default useLogout;
