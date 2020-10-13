import {BaseService} from './base.service';
import {LessifyConfig} from '../lessify';

export interface Configurations {
  [key: string]: string | number | boolean;
}

export class ConfigurationService extends BaseService {
  constructor(
      readonly config: LessifyConfig
  ) {
    super(config);
  }

  /**
   * get Configurations
   * examples:
   * {
   *   "boolean": true,
   *   "date": "2020-02-20",
   *   "text": "any value",
   *   "number": 1
   * }
   */
  get<T>(): Promise<T>;
  /**
   * get Configurations
   * examples:
   * {
   *   "boolean": true,
   *   "date": "2020-02-20",
   *   "text": "any value",
   *   "number": 1
   * }
   */
  get(): Promise<Configurations> {
    const url = `${this.getRootUrl()}/v1/spaces/${this.getSpace()}/environments/${this.getEnvironment()}/configurations.json`;
    return fetch(url, {headers: this.getHeaders()})
    .then(value => value.json());
  }

  /**
   * get Configurations
   * examples:
   * {
   *   "boolean": true,
   *   "date": "2020-02-20",
   *   "text": "any value",
   *   "number": 1
   * }
   */
  getRaw(): Promise<Response> {
    const url = `${this.getRootUrl()}/v1/spaces/${this.getSpace()}/environments/${this.getEnvironment()}/configurations.json`;
    return fetch(url, {headers: this.getHeaders()});
  }
}
