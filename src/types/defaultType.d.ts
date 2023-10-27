/**
 *
 * @interface StringKeyMap
 * @typedef {StringKeyMap}
 */
export interface StringKeyMap {
  [key: string]: any;
}

export interface AnyKeyMap {
  [key: any]: any;
}

export interface OptionCallback {
  (opt: object): any;
}
