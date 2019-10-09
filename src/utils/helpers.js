export const getDefaultsLabel = (nb) => {
    const str = {
      0: `L'équipement n'a pas de défaut répertorié`,
      1: `L'équipement a ${nb} défaut répertorié`
    }
    return nb > 1 ? `L'équipement a ${nb} défauts répertoriés` : str[nb]
  }