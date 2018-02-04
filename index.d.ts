interface Cache = {
  keys: Array<any>,
  values: Array<any>
};

interface Options {
  isEqual?: (firstValue: any, secondValue: any) => boolean;
  isPromise?: boolean;
  maxSize?: number;
  onCacheChange?: (cache: Cache) => void;
  transformKey?: (args: any[]) => any;
}

type Fn = (...args: any[]) => any;

declare function memoize<T extends Fn>(fn: T, options?: Options): T;

export default memoize;
