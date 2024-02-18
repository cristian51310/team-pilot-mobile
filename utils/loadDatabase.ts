import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export const loadDatabase = async () => {
  const dbName = 'database.db';
  const dbAsset = require("../assets/mySQLiteDB.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbPath);

  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', {
      intermediates: true
    });

    await FileSystem.downloadAsync(dbUri, dbPath);
  }
}