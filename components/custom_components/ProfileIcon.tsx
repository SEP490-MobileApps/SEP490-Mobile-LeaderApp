import { View, Image, GestureResponderEvent } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


interface ProfileIconProp{
    image: string
    handlePress?: () => void;

}

const ProfileIcon = ({image, handlePress} : ProfileIconProp) => {
  return (
    <TouchableOpacity className='mt-10 flex-row items-end justify-center'
        onPress={handlePress}
    >
      <Image source={{uri: image}} className='w-28 h-28 rounded-full'/>
      <View className='bg-[#3F72AF] p-1 rounded-full -ml-6 border-2 border-white'>
          <MaterialIcons name="edit" size={15} color="white"/>
      </View>
    </TouchableOpacity>
  )
}

export default ProfileIcon