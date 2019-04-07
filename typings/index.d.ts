declare module 'cafebot.js' {
  import { EventEmitter } from "events";

  interface SimpleJSON {
    toJSON(simple?: boolean): JSONCache;
  } 
  interface ClientOptions {
      log?: false;
      beautyConsole?: null;
  }

  export class Client extends EventEmitter implements SimpleJSON, Emittable {
    public token?: string;
    public options: ClientOptions;

    private profile(userid: string): Promise<object>;
    private voted(userid: string): Promise<object>;
    private active(userid: string): Promise<object>;
    private team(userid: string): Promise<object>;
    private prices(userid: string, amount: int): Promise<object>;
    private purchased(userid: string): Promise<object>;
    private garden(userid: string, amount: int): Promise<object>;
  };
  
  export const version: string;
}