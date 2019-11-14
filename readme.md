# Capacitor Data Storage SQLite Plugin
Capacitor Data Storage SQlite  Plugin is a custom Native Capacitor plugin to store permanently data to SQLite on IOS and Android platforms and to IndexDB for the Web and Electron platforms.
As capacitor provides fisrt-class Progressive Web App support so you can use this plugin in your app which will later be deployed to the app stores and the mobile web.

Capacitor Data Storage SQlite Plugin provides a key-value store for simple data of type string only, so JSON object can be stored, you should manage conversion through JSON.stringify before storing and JSON.parse when retrieving the data, use the same procedure for number through number.toString() and Number().

*****************************************************************
WARNING !!!! NEVER USE RELEASES 1.2.1-5 to 1.2.1-8.
They are unsuccessful attemps of an Electron plugin using sqlite3
Will wait until the Ionic Capacitor Team provides a methodology
*****************************************************************


*******************************************************
Change since release 1.2.1-11
 - openStore method has been included to specify
    - the database name
    - the table name

   To be compatible with previous releases you must do:
   ```openStore()``` 

   To define new database and table name do:
   ```openStore({database:"MyDatabase",table:"MyTableName"})```

 - setTable method has been included to 
    - add a table to an existing opened store
    - set an already existing table to an existing opened store

    ```setTable({table:"MyNewTableName"})``` 



*******************************************************

## View Me
[capacitor-data-storage-sqlite](https://ionicpwacapacitorstorage.firebaseapp.com)

## Methods available

    clear()                                             clear the store
    openStore({})                                       open the store with default database and table names
    openStore({database:"fooDB",table:"fooTable"})      open the store with given database and table names
    setTable({table:"foo1Table"})                       set or add a table to the opened store
    get({key:"foo"})                                    get the value of a given key  
    iskey({key:"foo"})                                  test key exists
    keys()                                              get all keys
    keysvalues()                                        get all key/value pairs
    remove({key:"foo"})                                 remove a key
    set({key:"foo",value:"foovalue"})                   set key and its value
    values()                                            get all values

## To use the Plugin in your Project
```bash
npm install --save capacitor-data-storage-sqlite@latest
```

Ionic App showing an integration of [capacitor-data-storage-sqlite plugin](https://github.com/jepiqueau/ionic-capacitor-data-storage-sqlite)

Vue App showing an integration of [capacitor-data-storage-sqlite plugin](https://github.com/jepiqueau/vue-capacitor-data-storage-sqlite)

PWA App showing an integration of 
[capacitor-data-storage-sqlite plugin](https://github.com/jepiqueau/ionicpwacapacitorstorage.git)


## Remarks
This release of the plugin includes the Native IOS code (Objective-C/Swift),the Native Android code (Java) and the Web code (Typescript) using Capacitor v1.2.1

## Dependencies
The IOS code is based on SQLite.swift as wrapper for SQLite, the Web code has been implemented with localforage  as wrapper for indexDB.


