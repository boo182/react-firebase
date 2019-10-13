import React from 'react';
import { EMPTY_MAP, EMPTY_LIST, EMPTY_FUNC } from '../../constants';

// ================================================

export const DetailContext = React.createContext({
  equipment: EMPTY_MAP,
  checkpoints: EMPTY_LIST,
  onUpdateNote: EMPTY_FUNC,
});
