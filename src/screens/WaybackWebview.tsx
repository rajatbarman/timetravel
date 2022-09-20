import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { WaybackWebviewScreenProps } from './WaybackWebview.interface';
import { ActivityIndicator } from 'react-native';
import styles from './WaybackWebview.style';

export default function WaybackWebview(props: WaybackWebviewScreenProps) {
  const routeParams = props.route.params || { url: '' };

  function renderLoading() {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.emoji}>🚀🚀🚀</Text>
        <ActivityIndicator style={styles.loader} color="#000" />
      </View>
    );
  }

  const INJECTED_JAVSCRIPT = `
    (function() {
      document.getElementById("wm-ipp-base").remove();
      setTimeout(() => {
        document.getElementById("wm-ipp-base").remove();
      }, 2000);
    })();
  `;

  return (
    <WebView
      renderLoading={renderLoading}
      startInLoadingState
      source={{ uri: routeParams.url }}
      injectedJavaScript={INJECTED_JAVSCRIPT}
      injectedJavaScriptBeforeContentLoaded={INJECTED_JAVSCRIPT}
    />
  );
}
