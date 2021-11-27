import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeObjectData = async(key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e)
        return False
    }

    return True
}

export const storeStringValue = async(key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
        return False
    }

    return True
}


export const setMultiple = async(keyValueArray) => {
    try {
      await AsyncStorage.multiSet(keyValueArray)
    } catch(e) {
      //save error
        console.log(e)
        return False
    }
  
    console.log("Done.")
  }


export const getMultiple = async(keyValueArray) => {

    let values
    try {
      values = await AsyncStorage.multiGet(keyValueArray)
      return values
    } catch(e) {
        console.log(e)
        return False
    }
  
  }

export const getStringValue = async(key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch(e) {
        console.log(e)
        return False
    }
} 
  