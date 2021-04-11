export interface CapacitorDataStorageSqlitePlugin {
    /**
     *
     * @param options: capEchoOptions
     * @return Promise<capEchoResult>
     * @since 0.0.1
     */
    echo(options: capEchoOptions): Promise<capEchoResult>;
    /**
     * Open a store
     * @param options: capOpenStorageOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    openStore(options: capOpenStorageOptions): Promise<void>;
    /**
     * Close the Store
     * @param options: capStorageOptions
     * @returns Promise<void>
     * @since 3.0.0
     */
    closeStore(options: capStorageOptions): Promise<void>;
    /**
     * Check if the Store is opened
     * @param options: capStorageOptions
     * @returns Promise<capDataStorageResult>
     * @since 3.0.0
     */
    isStoreOpen(options: capStorageOptions): Promise<capDataStorageResult>;
    /**
     * Check if the Store exists
     * @param options: capStorageOptions
     * @returns Promise<capDataStorageResult>
     * @since 3.0.0
     */
    isStoreExists(options: capStorageOptions): Promise<capDataStorageResult>;
    /**
     * Set or Add a table to an existing store
     * @param options: capTableStorageOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    setTable(options: capTableStorageOptions): Promise<void>;
    /**
     * Store a data with given key and value
     * @param options: capDataStorageOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    set(options: capDataStorageOptions): Promise<void>;
    /**
     * Retrieve a data value for a given data key
     * @param options: capDataStorageOptions
     * @returns Promise<capValueResult>
     * @since 0.0.1
     */
    get(options: capDataStorageOptions): Promise<capValueResult>;
    /**
     * Remove a data with given key
     * @param options: capDataStorageOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    remove(options: capDataStorageOptions): Promise<void>;
    /**
     * Clear the Data Store (delete all keys)
     * @returns Promise<void>
     * @since 0.0.1
     */
    clear(): Promise<void>;
    /**
     * Check if a data key exists
     * @param options: capDataStorageOptions
     * @returns Promise<capDataStorageResult>
     * @since 0.0.1
     */
    iskey(options: capDataStorageOptions): Promise<capDataStorageResult>;
    /**
     * Get the data key list
     * @returns Promise<capKeysResult>
     * @since 0.0.1
     */
    keys(): Promise<capKeysResult>;
    /**
     * Get the data value list
     * @returns Promise<capValuesResult>
     * @since 0.0.1
     */
    values(): Promise<capValuesResult>;
    /**
     * Get the data value list for filter keys
     * @param options: capFilterStorageOptions
     * @returns Promise<capValuesResult>
     * @since 2.4.2
     */
    filtervalues(options: capFilterStorageOptions): Promise<capValuesResult>;
    /**
     * Get the data key/value pair list
     * @returns Promise<capKeysValuesResult>
     * @since 0.0.1
     */
    keysvalues(): Promise<capKeysValuesResult>;
    /**
     * Delete a store
     * @param options: capOpenStorageOptions
     * @returns Promise<void>
     * @since 0.0.1
     */
    deleteStore(options: capOpenStorageOptions): Promise<void>;
    /**
     * Check if a table exists
     * @param options: capTableStorageOptions
     * @returns Promise<capDataStorageResult>
     * @since 3.0.0
     */
    isTable(options: capTableStorageOptions): Promise<capDataStorageResult>;
    /**
     * Get the table list for the current store
     * @returns Promise<capKeysResult>
     * @since 3.0.0
     */
    tables(): Promise<capKeysResult>;
    /**
     * Delete a store
     * @param options: capTableStorageOptions
     * @returns Promise<void>
     * @since 3.0.0
     */
    deleteTable(options: capTableStorageOptions): Promise<void>;
}
export interface capEchoOptions {
    /**
     *  String to be echoed
     */
    value?: string;
}
export interface capOpenStorageOptions {
    /**
     * The storage database name
     */
    database?: string;
    /**
     * The storage table name
     */
    table?: string;
    /**
     * Set to true for database encryption
     */
    encrypted?: boolean;
    /***
     * Set the mode for database ancryption
     * ["encryption", "secret","newsecret"]
     */
    mode?: string;
}
export interface capDataStorageOptions {
    /**
     * The data name
     */
    key: string;
    /**
     * The data value when required
     */
    value?: string;
}
export interface capStorageOptions {
    /**
     * The storage name
     */
    database: string;
}
export interface capTableStorageOptions {
    /**
     * The storage table name
     */
    table: string;
}
export interface capFilterStorageOptions {
    /**
     * The filter data for filtering keys
     *
     * ['%filter', 'filter', 'filter%'] for
     * [starts with filter, contains filter, ends with filter]
     */
    filter: string;
}
export interface capEchoResult {
    /**
     * String returned
     */
    value: string;
}
export interface capDataStorageResult {
    /**
     * result set to true when successful else false
     */
    result?: boolean;
    /**
     * a returned message
     */
    message?: string;
}
export interface capValueResult {
    /**
     * the data value for a given data key
     */
    value: string;
}
export interface capKeysResult {
    /**
     * the data key list as an Array
     */
    keys: string[];
}
export interface capValuesResult {
    /**
     * the data values list as an Array
     */
    values: string[];
}
export interface capKeysValuesResult {
    /**
     * the data keys/values list as an Array of {key:string,value:string}
     */
    keysvalues: any[];
}
