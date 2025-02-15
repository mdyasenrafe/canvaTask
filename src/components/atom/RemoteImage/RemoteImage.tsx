import {useState, memo} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import {Box} from '../Box';

export type RemoteImageProps = Omit<ImageProps, 'source'> & {
  url?: string;
  source?: ImageSourcePropType;
  shouldShowLoader?: boolean;
};

export const RemoteImage = memo(
  ({
    url,
    source,
    style,
    shouldShowLoader = false,
    ...rest
  }: RemoteImageProps) => {
    const [loading, setLoading] = useState(true);

    const imageSource = source ? source : {uri: url};

    return (
      <Box justifyContent="center" alignItems="center" style={style}>
        {loading && shouldShowLoader && (
          <ActivityIndicator
            size="small"
            color="#999999"
            style={styles.loader}
          />
        )}
        <Image
          source={imageSource}
          {...rest}
          style={[style, loading ? styles.hiddenImage : styles.visibleImage]}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </Box>
    );
  },
);

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
  },
  hiddenImage: {
    opacity: 0,
  },
  visibleImage: {
    opacity: 1,
  },
});
