import { Account, Client, ID } from 'react-native-appwrite';
export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '662387f6a5a8291495d0',
  databaseId: '662389b504a424f74f3f',
  userCollectionId: '662389d6bac7f54359c4',
  videoCollectionId: '662389fc15f49e1ada44',
  storageId: '66238b8e373c403742e4',
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
