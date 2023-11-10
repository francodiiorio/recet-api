import Role from './Role.js';
import User from './User.js';
import Alimento from './Alimento.js';
import Receta from './Receta.js';

// Role.hasMany(User, {
//   foreignKey: 'roleId',
//   //   onDelete: "RESTRICT",
// });
// User.belongsTo(Role, { foreignKey: 'roleId' });

Receta.hasMany(Alimento, {
  foreignKey: 'recetaId',
  //   onDelete: "RESTRICT",
});
Alimento.belongsTo(Receta, { foreignKey: 'recetaId' });

// Role.hasMany(User);
// User.belongsTo(Role);

export { Role, User, Alimento, Receta };
