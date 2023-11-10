import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class Alimento extends Model {}

Alimento.init(
  {
    alimentoName: {
      type: DT.STRING(50),
      // allowNull: false,
      defaultValue: 'sal',
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Alimento',
  }
);

export default Alimento;
