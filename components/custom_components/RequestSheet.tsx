import React, { useEffect, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useGlobalState } from '@/context/GlobalProvider'; 
import { Text } from 'react-native';


const CustomSheet = () => {
  const { isRequestOpen, setIsRequestOpen } = useGlobalState();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

  // Open/close bottom sheet based on isOpen prop
  useEffect(() => {
    if (isRequestOpen) {
      bottomSheetRef.current?.snapToIndex(2); // Opens the sheet
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isRequestOpen]);

  // Close the sheet when it is dismissed
  const handleClose = () => {
    setIsRequestOpen(false);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={handleClose} 
      index={-1}
    >
      <BottomSheetView className='flex items-center'>
        <Text>Hello</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CustomSheet;
