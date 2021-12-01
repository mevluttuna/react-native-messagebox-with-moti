import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import MessageBox from './src/components/MessageBox';

const App = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <MessageBox
        isShow={isShow}
        onClickResponse={response => {
          console.log(response);
          setIsShow(false);
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title={!isShow ? 'Show' : 'Hide'}
          onPress={() => setIsShow(!isShow)}
        />
      </View>
    </>
  );
};

export default App;
