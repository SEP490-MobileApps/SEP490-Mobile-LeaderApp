import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import RenderContractCard from '@/components/custom_components/RenderContractCard';
import { contracts } from '@/constants/data';

const Contract = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a data fetch or refresh logic
    setTimeout(() => {
      // Here you would fetch the new data if needed
      setRefreshing(false);
    }, 2000); // Simulate network request delay
  };

  return (
    <SafeAreaView>
      <RenderContractCard
        contract={contracts}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

export default Contract;
