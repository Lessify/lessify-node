import {LessifyConfig} from '../lessify';

export abstract class BaseService {

  protected constructor(readonly config: LessifyConfig) {
    if (config.spaceId == null || config.spaceId === '') {
      throw new Error('Lessify Configuration Space is required.');
    }
    if (config.environment == null || config.environment === '') {
      throw new Error('Lessify Configuration Environment is required.');
    }
    if (config.apiKey == null || config.apiKey === '') {
      throw new Error('Lessify Configuration API Key is required.');
    }
  }

  getRootUrl(): string {
    return (this.config.beta == null || this.config.beta === false) ? 'https://api.lessify.io' : 'https://dev-api.lessify.io';
  }

  getHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  getSpace(): string {
    return this.config.spaceId;
  }

  getEnvironment(): string {
    return this.config.environment;
  }
}
