import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class Recetas extends Model {}

Recetas.init(
  {
    recetasName: {
      type: DT.STRING(50),
      // allowNull: false,
      defaultValue: 'recetaX',
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Recetas',
  }
);

export default Recetas;
