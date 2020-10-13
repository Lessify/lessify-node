import {BaseService} from './base.service';
import {LessifyConfig} from '../lessify';

export interface Messages {
  [key: string]: string;
}

export class TranslationService extends BaseService {

  constructor(readonly config: LessifyConfig) {
    super(config);
  }

  /**
   * get Translation, possible values:
   * - locale: specific locale id from space
   *
   * returns :
   * {
   *  'key1': 'value1',
   *  'key1': 'value1'
   * }
   */
  get(locale: string): Promise<Messages> {
    const url = `${this.getRootUrl()}/v1/spaces/${this.getSpace()}/environments/${this.getEnvironment()}/translations.${locale}.json`;
    return fetch(url, {headers: this.getHeaders()})
    .then(value => value.json());
  }

  /**
   * get Translation, possible values:
   * - locale: specific locale id from space
   *
   * returns :
   * {
   *  'key1': 'value1',
   *  'key1': 'value1'
   * }
   */
  getRaw(locale: string): Promise<Response> {
    const url = `${this.getRootUrl()}/v1/spaces/${this.getSpace()}/environments/${this.getEnvironment()}/translations.${locale}.json`;
    return fetch(url, {headers: this.getHeaders()})
  }
}
