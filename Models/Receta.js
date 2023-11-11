import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class Recetas extends Model {}

Recetas.init(
  {
    recetaName: {
      type: DT.STRING(50),
      // allowNull: false,
      defaultValue: 'recetaX',
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Receta',
  }
);

export default Recetas;
