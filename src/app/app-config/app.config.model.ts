export interface IAppConfig {
  env: {
    name: string;
  };
  pathFolderSite: string;
  baseAPI: string;
  subscriptionKey: string;
  appInsights: {
    instrumentationKey: string;
  };
  webSocket: {
    Scheduledtask: {
      Url: string;
    };
    Monitoring: {
      Url: string;
    };
  };
  configAuthorization: {
    inProduction: boolean;
    clientId: string;
    subscriptionKey: string;
    url: string;
  };
}
