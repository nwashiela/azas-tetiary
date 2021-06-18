const SYNC_INTERVAL_MS = 30 * 60 * 1000;
const checkIfCanSync = () => {
    const appString = window.localStorage.getItem('app');
    const currentTimestamp = new Date().getTime();
    if (!appString) {
        window.localStorage.setItem(
            'app', JSON.stringify({lastSync: currentTimestamp})
            );
            return true;
    }
    const appData = JSON.parse(appString);
    if (appData.lastSync + SYNC_INTERVAL_MS >= currentTimestamp) return;
    window.localStorage.setItem(
        'app', JSON.stringify({lastSync: currentTimestamp})
        );
    return true;
};
const app = {
    checkIfCanSync
}
export default  app  
