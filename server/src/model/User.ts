export class User {
  id: number;
  nodeUrl: string;
  macaroon: string;
  cert: string;

  constructor(id: number, nodeUrl: string, macaroon: string, cert: string) {
    this.id = id;
    this.nodeUrl = nodeUrl;
    this.macaroon = macaroon;
    this.cert = cert;
  }
}
