import AsyncStorage from '@react-native-async-storage/async-storage';

//Takes in key and value (of any type) and store value in key
export const storeData = async(key, value) => {
    try {
        value = typeof value == "string" ? value: JSON.stringify(value)
        await AsyncStorage.setItem(key, value)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

//Takes in key and return value from key
export const getData = async(key) => {
    try {
        value = await AsyncStorage.getItem(key)
        value = typeof value == "string"? JSON.parse(value): value;
        return value
    } catch(e) {
        console.log(e)
        return false
    }
} 
  
//Takes in an array of key and value (of type string) and store values in keys
export const setMultiple = async(keyValueArray) => {
    try {
      await AsyncStorage.multiSet(keyValueArray)
    } catch(e) {
      //save error
        console.log(e)
        return false
    }
  
    console.log("Done.")
  }

//Take in an array of keys and return values (of type string) from keys
export const getMultiple = async(keyValueArray) => {

    let values
    try {
      values = await AsyncStorage.multiGet(keyValueArray)
      return values
    } catch(e) {
        console.log(e)
        return false
    }
  
  }

