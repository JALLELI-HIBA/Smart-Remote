import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThermostatComponent = () => {
  const navigation = useNavigation();

  return (
    <View>
  <View style={styles.container}>
  <View style={styles.iconRow}>
  <Image source={require('../assets/1 AUTO MODE.png')} style={styles.icon}/>
  <Image source={require('../assets/2 COOLD MODE.png')} style={styles.icon} />
  <Image source={require('../assets/3 DRY MODE.png')} style={styles.icon} />
  <Image source={require('../assets/4 FAN .png')} style={styles.icon} />
  <Image source={require('../assets/5 HEAT MODE.png')} style={[styles.icon, styles.highContrastIcon]} />
</View>


      <View style={styles.horizontalLine} />
      <View style={styles.temperatureRow}>
        <Text style={styles.temperatureText}>23</Text>
        <Text style={styles.tem}>C</Text>
        <View style={styles.verticalLine} />
        <View style={styles.autoColumn}>
          <Text style={styles.autoText}>AUTO</Text>
          <View style={styles.lineSeparator} />
          <Text style={styles.extraText}>00</Text>
          <Text style={styles.te}>C</Text>
          <Image
            source={require('../assets/SWING LOGO.png')}
            style={styles.temperatureImage}
          />
          <Text style={styles.extraTextt}>000%</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.connectedRow}>
        <Text style={styles.connectedText}>CONNECTED</Text>
      </View>
    </View>
      <View style={styles.power}>
        <TouchableOpacity >
          <Image
            source={require('../assets/power.png')}
            style={styles.powerButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.exit}>
        <TouchableOpacity onPress={() => navigation.navigate('SideBar')}>
          <Image
            source={require('../assets/exit.webp')}
            style={styles.exitButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.directionalContainer}>
  <View style={styles.directionalWrapper}>
    <View style={styles.upButton}>
      <TouchableOpacity style={styles.directionButton}>
        <Text style={styles.buttonText1}>▲</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.middleRow}>
      <TouchableOpacity style={styles.directionButton}>
        <Image
          source={require('../assets/SWING.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.modeButton}>
        <Text style={styles.buttonText}>Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.directionButton}>
        <Image
          source={require('../assets/FAN.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.downButton}>
      <TouchableOpacity style={styles.directionButton}>
        <Text style={styles.buttonText2}>▼</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5fa8d3' }]} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#76c893' }]} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#fcbf49' }]} />
      </View>
      <Text style={styles.beko}>BEKO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7e4c7',
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 4, // Add border
    borderColor: 'black', // Border color
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom: 0,
    padding:3
  },
  icon: {
    width: 35,
    height: 35,
    marginLeft: 22,
    opacity: 0.1, // Adjust opacity here for lower contrast
  },
  highContrastIcon: {
    opacity: 1, // Keep the contrast higher for this specific image
  },
  horizontalLine: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    width:337,
    marginLeft:-11
  },
  verticalLine: {
    borderLeftWidth: 3,
    borderLeftColor: 'black',
    height: 120,
    marginHorizontal: 0, // Remove marginHorizontal
    marginLeft: 70,
  },
  temperatureRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  temperatureText: {
    fontSize: 60,
    marginLeft: 27,
  },
  tem: {
    fontSize: 20,
    marginBottom: -29,
    marginLeft:4
  },
  autoColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoText: {
    marginLeft: -75,
    marginTop: -5,
    opacity:0.2,
    marginBottom:15
  },
  lineSeparator: {
    height: 3,
    width: 144,
    backgroundColor: 'black',
    marginVertical: 0, // Remove marginVertical
    marginTop: 0, // Remove marginTop
    marginLeft: 10,
  },
  extraText: {
    marginLeft: 65,
    marginTop: 20,
    fontSize: 23,
  },
  extraTextt: {
    marginLeft: 61,
    marginTop: -12,
    fontSize: 22,
  },
  connectedRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  connectedText: {
    marginLeft: -180,
    fontWeight:'bold',
    fontSize:20
  },
  te: {
    marginRight: -100,
    marginTop: -22,
  },
  temperatureImage: {
    width: 40,
    height: 40,
    marginTop: -27,
    marginLeft: -70,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  modeButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionalButtons: {
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: -150
  },
  directionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 7,
    marginRight: 7
  },
  powerButton: {
    width: 60, 
    height: 60, 
    marginTop:50,
    marginLeft:30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: -4

  },
  upButton: {
    marginTop: -185,
    marginLeft: 165

  },
  downButton: {
    marginBottom: -145,
    marginRight: 160,
    marginLeft: -145 // Adjust this value to move the down button more to the left
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',

  },
  power: {
    width: 5,
    height: 5,
    marginBottom: 20
  },
    exit: {
        width: 5,
        height: 5,
        marginBottom: 20
      },
      exitButton: {
        width: 50, 
        height: 50, 
        marginTop:30,
        marginLeft:270
      },
  beko:{
    marginTop:30,
    marginLeft:155,
    fontSize:20,
    fontWeight:'bold',
    color: 'black',
    fontFamily: 'Papyrus, fantasy'
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop:100,
    marginLeft:70
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft:20
  },
  arrowImage: {
    width: 30,
    height: 30,
  },
  temperatureImage: {
    width: 40,
    height: 40,
    marginTop:-27,
    marginLeft: -70,
  },
  
  
    directionalContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    directionalWrapper: {
      alignItems: 'center',
      backgroundColor: '#d3d3d3',
      borderRadius: 10,
      padding: 10,
    },
    upButton: {
      marginBottom: 10,
    },
    middleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    downButton: {
      marginTop: 10,
    },
    directionButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#d3d3d3',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    modeButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#d3d3d3',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonText1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red',
    },
    buttonText2: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red',
    },
    arrowImage: {
      width: 30,
      height: 30,
    }
});

export default ThermostatComponent;
