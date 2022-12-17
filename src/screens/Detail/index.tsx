import { View, StyleSheet } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

import { useRoute } from '@react-navigation/native';

import { ScreenHeader } from '../../components/ScreenHeader';

import planta from '../../assets/planta.png'

type RouteParams = {
  location: string;
}

export function Detail() {
  const { params } = useRoute();
  const { location } = params as RouteParams;

  return (
    <View style={styles.container}>
      <ScreenHeader title={location} />

      <ImageViewer 
        imageUrls={[{ url: '', props: { source: planta } }]}
        renderIndicator={() => <></>}
        backgroundColor='#fff'
        maxOverflow={9999}
        enableSwipeDown={false}
        saveToLocalByLongPress={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});