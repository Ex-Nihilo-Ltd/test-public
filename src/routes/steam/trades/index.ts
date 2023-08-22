import { ApiBase } from '../../../base/api';
import { IActiveSteamTradesResponse, IGetSteamTradesPayload, IGetSteamTradesResponse } from './types';

export class SteamTradesRoutes {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = '/steam/trade';
  }

  public async get_steam_trades(payload: IGetSteamTradesPayload): Promise<IGetSteamTradesResponse> {
    return this.api.post<IGetSteamTradesResponse, IGetSteamTradesPayload>(`${this.baseUri}/list`, payload);
  }

  public async get_active_steam_trades(payload: IGetSteamTradesPayload): Promise<IActiveSteamTradesResponse> {
    return this.api.post<IActiveSteamTradesResponse, IGetSteamTradesPayload>(`${this.baseUri}/active`, payload);
  }

  //TODO: update response when there are listed items
  public async get_hashes_of_active_steam_trades(): Promise<[]> {
    return this.api.post<[]>(`${this.baseUri}/active_hash`, {});
  }
}
