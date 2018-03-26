import {Injectable} from '@angular/core';

@Injectable()
export class VarConnexion {
  identifiant;
  mdp;
  connected;
  constructor() {
    this.identifiant = null;
    this.mdp = null;
    this.connected = false;
  }

  setVarConnexionMdp(_mdp){
    this.mdp = _mdp;
  }
  setVarConnexionId(_identifiant){
    this.identifiant = _identifiant;
  }
  setVarConnexionConnected(_connected){
    this.connected = _connected;
  }
  getVarConnection() {
    var connect = {
      identifiant: this.identifiant,
      mdp: this.mdp,
      connected: this.connected
    };
    return connect;
  }

}