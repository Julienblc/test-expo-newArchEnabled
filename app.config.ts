export default {
    name: 'Test Name',
    scheme: 'testscheme',
    slug: 'com_test_slug',
    version: '0.0.1',
    icon: './assets/test-icon.png',
    splash: {
        image: './assets/test-splash.png',
        resizeMode: 'contain',
        backgroundColor: '#000000',
    },
    runtimeVersion: {
        policy: 'testPolicy',
    },
    updates: {
        checkAutomatically: 'ON_LOAD',
        fallbackToCacheTimeout: 0,
        url: 'https://u.expo.dev/test-url',
    },
    plugins: [],
    assetBundlePatterns: ['test/**/*'],
    expo: {
        newArchEnabled: true,
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.test.bundle',
        buildNumber: '1',
    },
    android: {
        package: 'com.test.package',
        versionCode: 1,
        adaptiveIcon: {
            foregroundImage: './assets/test-adaptive-icon.png',
            backgroundColor: '#000000',
        },
    },
    extra: {
        eas: {
            projectId: 'test-project-id',
        }
    },
    owner: 'testowner',
};
