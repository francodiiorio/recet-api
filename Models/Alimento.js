import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class Alimento extends Model {}

Alimento.init(
  {
    alimentoName: {
      type: DT.STRING(50),
      defaultValue: 'x',
      unique: true,
    },

    peso: {
      type: DT.STRING(50),
      defaultValue: '0',
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Alimento',
  }
);

export default Alimento;
