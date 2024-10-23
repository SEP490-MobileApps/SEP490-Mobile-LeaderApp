import { Text, Image, FlatList, RefreshControl, View } from 'react-native';
import React from 'react';
import { Worker } from '@/model/worker';
import EmptyState from './EmptyUserList';

interface RenderWorkerItemProps {
  workers: Worker[];
  refreshing: boolean;
  onRefresh: () => void;
}

const RenderWorkerItem = ({ workers, onRefresh, refreshing }: RenderWorkerItemProps) => {
  const renderItem = ({ item }: { item: Worker }) => (
    <View>
      <Image
        source={{ uri: item.AvatarUrl }}
        className="w-[50px] h-[50px]"
        resizeMode="contain"
      />
      <Text>{item.FullName}</Text>
      <Text>{item.Email}</Text>
      <Text>{item.PhoneNumber}</Text>
    </View>
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.AccountId} // Use AccountId as the unique key
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<EmptyState title='Không có nhân viên' subtitle='Không tìm nhân viên mà bạn cần'/>}
    />
  );
};

export default RenderWorkerItem;
