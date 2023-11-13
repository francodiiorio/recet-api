import User from './User.js';
import Alimento from './Alimento.js';
import Receta from './Receta.js';
import AlimentoReceta from './AlimentoReceta.js';

Receta.belongsToMany(Alimento, {
  through: 'AlimentoReceta',
  foreignKey: 'recetaId',
});
Alimento.belongsToMany(Receta, {
  through: 'AlimentoReceta',
  foreignKey: 'alimentoId',
});

export { User, Alimento, Receta, AlimentoReceta };
