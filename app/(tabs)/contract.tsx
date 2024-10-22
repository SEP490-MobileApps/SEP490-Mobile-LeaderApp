import { View, Text } from 'react-native'
import React from 'react'
import RenderContractCard from '@/components/custom_components/RenderContractCard'
import { contracts } from '@/constants/data'

const contract = () => {
  return (
    <View>
      <RenderContractCard contract={contracts}/>
    </View>
  )
}

export default contract