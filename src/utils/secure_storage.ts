import * as Keychain from 'react-native-keychain';

// Set an item in the secure storage
export const setSecureItem = async (key: string, value: string) => {
    await Keychain.setGenericPassword(key, value, {
        accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
};

// Get an item from the secure storage
export const getSecureItem = async (key: string): Promise<string | null> => {
    try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials && credentials.username === key) {
            return credentials.password;
        }
        return null;
    } catch (error) {
        console.error('Error getting secure item:', error);
        return null;
    }
};

// Reset the secure storage
export const resetSecureStorage = async () => {
    await Keychain.resetGenericPassword();
};
