import { DataTypes, Model } from 'sequelize';
import connection from '../connection/connection.js';
// import { Role } from "./index.js";
class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'No tiene formato de email',
        },
      },
    },
    //     roleId: {
    //       type: DataTypes.INTEGER,
    //       references: {
    //         model: Role,
    //         key: "id",
    //       },
    //     },
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);

export default User;
