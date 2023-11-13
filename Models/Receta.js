import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class Receta extends Model {}

Receta.init(
  {
    recetaName: {
      type: DT.STRING(50),
      defaultValue: 'x',
      unique: true,
    },
    calorias: {
      type: DT.STRING(50),
      defaultValue: '0',
    },
  },
  {
    sequelize: connection,
    modelName: 'Receta',
  }
);

export default Receta;
