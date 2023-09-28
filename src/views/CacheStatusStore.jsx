import { observable, action, makeObservable } from 'mobx';

class CacheStatusStore {
  cacheStatusData = {
    totalCacheStatus: 0,
    totalCacheSize: '100 MB',
    optimizedUrls: 80,
    pendingUrls: 1,
    notOptimizedUrls: 0,
    htmlCache: '0 MB',
    jsCache: '0 MB',
    cssCache: '0 MB',
    fontsCache: '0 kB',
    imagesCache: '0 MB',
  };

  constructor() {
    makeObservable(this, {
      cacheStatusData: observable,
      fetchCacheStatus: action,
    });
  }

  async fetchCacheStatus() {
    // Simulate an API call (replace with API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update the store data with dummy values
    this.cacheStatusData = {
      totalCacheStatus: 335,
      totalCacheSize: '467.08 MB',
      optimizedUrls: 246,
      pendingUrls: 72,
      notOptimizedUrls: 19,
      htmlCache: '114.79 MB',
      jsCache: '21.54 MB',
      cssCache: '67.67 MB',
      fontsCache: '766.48 kB',
      imagesCache: '262.46 MB',
    };
  }
}

const cacheStatusStore = new CacheStatusStore();
export default cacheStatusStore;
