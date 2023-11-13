import { DataTypes as DT, Model } from 'sequelize';
import connection from '../connection/connection.js';

class AlimentoReceta extends Model {}

AlimentoReceta.init(
  {
    recetaId: {
      type: DT.INTEGER,
      allowNull: false,
      references: {
        model: 'Recetas',
        key: 'id',
      },
    },
    alimentoId: {
      type: DT.INTEGER,
      allowNull: false,
      references: {
        model: 'Alimentos',
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'AlimentoReceta',
  }
);

export default AlimentoReceta;
