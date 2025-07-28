const defaultSource: any = {
  id: '1234',
  progressive: [
    {
      mimetype: 'video/mp4',
      url: './media/video.mp4'
    }
  ]
};

export const loadPlayer = (pluginConf: any, playbackConf: Record<string, any> = {}) => {
  cy.visit('index.html');
  return cy.window().then((win) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const kalturaPlayer = win.KalturaPlayer.setup({
        targetId: 'player-placeholder',
        provider: {
          partnerId: -1,
          env: {
            cdnUrl: 'http://mock-cdn',
            serviceUrl: 'http://mock-api'
          }
        },
        plugins: {
          reels: {}
        },
        playback: { muted: true, ...playbackConf }
      });

      kalturaPlayer.configure({ plugins: { reels: pluginConf } });

      return Promise.resolve(kalturaPlayer);
    } catch (e: any) {
      return Promise.reject(e.message);
    }
  });
};

export const setMedia = (player: any, sourcesConfig = defaultSource) => {
  player?.setMedia({
    sources: { ...sourcesConfig, ...defaultSource }
  });
};

export const loadPlayerAndSetMedia = (pluginConf: any, playbackConf: Record<string, any> = {}, sourcesConfig?: any): Promise<any> => {
  return new Promise((resolve) => {
    loadPlayer(pluginConf, playbackConf).then((kalturaPlayer) => {
      setMedia(kalturaPlayer, sourcesConfig);
      if (playbackConf.autoplay) {
        kalturaPlayer.ready().then(() => resolve(kalturaPlayer));
      }
      resolve(kalturaPlayer);
    });
  });
};
