module.exports = function (sequelize, DataTypes) {
  var quote = sequelize.define('quote', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    author_id: {
      type: DataTypes.INTEGER
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });

  quote.associate = function (models) {
    quote.author = quote.belongsTo(models.author, {as: 'author'});

  }

  return quote;
}
