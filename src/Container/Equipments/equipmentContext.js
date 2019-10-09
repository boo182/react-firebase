import React from 'react';
import { EMPTY_FUNC } from '../../constants';

// ================================================

export const EquipmentContext = React.createContext({
  equipments: {},
  onToggleSelectEquipment: EMPTY_FUNC,
});
