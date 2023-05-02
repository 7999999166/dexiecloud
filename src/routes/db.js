import Dexie from 'dexie';
import dexieCloud from "dexie-cloud-addon";

   const db = new Dexie('myDatabase', {addons: [dexieCloud]});

   db.version(1).stores({ friends: '@id, name, lastName' });

    db.cloud.configure({
    databaseUrl: "https://z9jpehi5y.dexie.cloud",
    requireAuth: true
  });

   export {db};