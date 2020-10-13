import {TranslationService} from './services/translation.service';
import {ConfigurationService} from './services/configuration.service';

export interface LessifyConfig {
  spaceId: string;
  environment: string;
  apiKey: string;
  beta?: boolean;
}

export class Lessify {
  private _translationService: TranslationService | undefined;
  private _configurationService: ConfigurationService | undefined;

  constructor(private readonly config: LessifyConfig) {
  }

  get translation(): TranslationService {
    if (this._translationService == null) {
      this._translationService = new TranslationService(this.config)
    }
    return this._translationService;
  }

  get configuration(): ConfigurationService {
    if (this._configurationService == null) {
      this._configurationService = new ConfigurationService(this.config)
    }
    return this._configurationService;
  }

}
