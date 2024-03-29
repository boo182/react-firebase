import React from 'react';
import { EMPTY_FUNC } from '../../constants';

// ================================================

export const EquipmentContext = React.createContext({
  equipments: {},
  onToggleSelectEquipment: EMPTY_FUNC,
  onToggleMultiple: EMPTY_FUNC,
  isAllEquipSelected: false,
  isSomeSelected: false,
  equipmentSortType: '',
  onSortlist: EMPTY_FUNC,
  onFilterEquipmentList: EMPTY_FUNC,
  onSetFilterType: EMPTY_FUNC,
  equipmentFilter: '',
  onGoToDetailPage: EMPTY_FUNC,
});
