// @flow
import { Map, List } from 'immutable';

export const EMPTY_MAP: Map = Map();
export const EMPTY_LIST: List = List();
export const EMPTY_FUNC: () => void = () => {};

export const  domainListColors = {
  'CVC': '#f1c232',
  'ELECTRICITE COURANTS FORTS': '#87f3be',
  'PLOMBERIE ET ASSAINISSEMENT': '#BDBDBD',
  'COMPTAGE': '#35b5bb', 
  'BATIMENT': '#ff7474',
  'ELECTRICITE COURANTS FAIBLES': '#66cfff',
  'INCENDIE ET SECURITE': '#ee99fc',
};

export const NAME = { value: 'name', label: 'Equipement' };
export const DEFAULTS_COUNT = { value: 'nbFaults', label: 'Nombre de défauts' };;
export const DOMAIN = { value: 'domain', label: 'Domaine' };

export const sortTypeList = [NAME, DEFAULTS_COUNT, DOMAIN];