import React, { useEffect, useState } from 'react';
import { streamMainStyle } from './styles/Stream.styles';

export interface AzureMediaPlayerProps {
  liveStreamUrl: string;
  isLiveStreaming: boolean;
}

export default (props: AzureMediaPlayerProps): JSX.Element => {
  useEffect(() => {
    let createPlayer = () => {
      var myOptions = {
        autoplay: true,
        controls: true,
        width: '100%',
        height: '100%',
        poster: ''
      };
      let _window: any = window;
      var myPlayer = _window.amp('azuremediaplayer', myOptions);
      myPlayer.src([
        {
          src: props.liveStreamUrl,
          type: 'application/vnd.ms-sstr+xml'
        }
      ]);

      return myPlayer;
    };

    let player = createPlayer();

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <video
      id="azuremediaplayer"
      className="azuremediaplayer amp-default-skin"
      autoPlay
      controls
      loop={!props.isLiveStreaming}
      width="100%"
      height="100%"
      poster="poster.jpg"
      data-setup='{"nativeControlsForTouch": false}'
      key={props.liveStreamUrl}
    >
      <source src={props.liveStreamUrl} type="application/vnd.ms-sstr+xml" />
    </video>
  );
};
