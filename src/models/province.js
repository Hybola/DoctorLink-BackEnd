module.exports = (sequelize, DataTypes) => {
    const Province = sequelize.define(
        'Province',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    )
    Province.associate = (models) => {
        Province.hasMany(models.Provider, {
            foreignKey: {
                name: 'provinceId',
            },
            onDelete: 'RESTRICT',
        })

        Province.hasMany(models.JobPost, {
            foreignKey: {
                name: 'provinceId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }

    return Province
}
