module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define(
        'Follow',
        {
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    )
    Follow.associate = (models) => {
        Follow.belongsTo(models.Doctor, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        Follow.belongsTo(models.Provider, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Follow
}
