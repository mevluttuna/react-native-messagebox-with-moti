import React, {useEffect, useState, createRef} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {MotiView, MotiText, MotiImage} from 'moti';
import PropTypes from 'prop-types';

import AlertIcon from '../assets/alert.png';

const {width, height} = Dimensions.get('window');

export const MessageBox = ({isShow, onClickResponse = () => {}}) => {
  const [show, setShow] = useState(isShow);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  const AlertImageComponent = () => (
    <MotiImage
      source={AlertIcon}
      delay={150}
      from={{
        bottom: -300,
      }}
      animate={{
        bottom: isShow ? 50 : -500,
      }}
      transition={{type: 'spring'}}
      style={{
        fontWeight: '900',
        color: '#fff',
        fontSize: width / 12,
        width: 80,
        height: 80,
      }}
    />
  );

  const AlertTextComponent = () => (
    <MotiText
      delay={100}
      from={{
        bottom: -100,
      }}
      animate={{
        bottom: isShow ? 45 : -width,
      }}
      transition={{type: 'spring'}}
      style={{
        fontWeight: '900',
        color: '#fff',
        fontSize: width / 12,
      }}>
      Are You Sure?
    </MotiText>
  );

  const ButtonsContainerComponent = () => (
    <MotiView
      style={{
        width: width,
        height: 50,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <MotiView
        delay={400}
        from={{
          bottom: -100,
        }}
        animate={{
          bottom: isShow ? 5 : -width,
        }}
        transition={{type: 'spring'}}
        style={{
          width: width / 2,
          fontWeight: '900',
          color: '#fff',
          fontSize: width / 12,
          position: 'absolute',
          left: 0,
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => {
            setShow(false);
            onClickResponse(false);
          }}
          style={{
            width: 50,
            borderBottomWidth: 2,
            borderColor: '#FFF',
            marginRight: 10,
          }}>
          <MotiText
            style={{
              color: '#FFF',
              fontWeight: '900',
            }}>
            NO
          </MotiText>
        </TouchableOpacity>
      </MotiView>
      <MotiView
        delay={700}
        from={{
          bottom: -100,
        }}
        animate={{
          bottom: isShow ? 5 : -width,
        }}
        transition={{type: 'spring'}}
        style={{
          width: width / 2,
          fontWeight: '900',
          color: '#fff',
          fontSize: width / 12,
          position: 'absolute',
          right: 0,
          alignItems: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => {
            setShow(true);
            onClickResponse(true);
          }}
          style={{
            width: 50,
            marginLeft: 10,
            borderBottomWidth: 2,
            borderColor: '#FFF',
            flexDirection: 'row',
          }}>
          <MotiText
            style={{
              color: '#FFF',
              fontWeight: '900',
            }}>
            YES
          </MotiText>
        </TouchableOpacity>
      </MotiView>
    </MotiView>
  );

  return (
    <MotiView
      from={{
        opacity: 0,
        width: width,
        height: 300,
        marginTop: -350,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        width: width,
        marginTop: show ? -50 : -350,
      }}
      transition={{type: 'spring'}}
      exit={{opacity: 1, scale: 0.1}}
      style={{
        width: 320,
        height: 320,
        backgroundColor: '#FF4040',
        position: 'absolute',
        zIndex: 9999999,
        overflow: 'hidden',
      }}>
      <MotiView
        style={{
          position: 'absolute',
          bottom: 15,
          width: width,
          alignItems: 'center',
        }}>
        <AlertImageComponent />
        <AlertTextComponent />
        <ButtonsContainerComponent />
      </MotiView>
    </MotiView>
  );
};

MessageBox.propTypes = {
  isShow: PropTypes.bool,
  onClickResponse: PropTypes.func,
};

export default MessageBox;
