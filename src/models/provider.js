module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define(
        'Provider',
        {
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            providerName: {
                type: DataTypes.STRING,
            },
            mobile: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/,
                },
            },
            description: DataTypes.STRING,
            profileImage: DataTypes.STRING,
            coverImage: DataTypes.STRING,
            lineId: DataTypes.STRING,
            googleMap: DataTypes.STRING,
            address: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )
    Provider.associate = (models) => {
        Provider.belongsTo(models.Province, {
            foreignKey: {
                name: 'provinceId',
            },
            onDelete: 'RESTRICT',
        })

        Provider.hasMany(models.JobPost, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        Provider.hasMany(models.Follow, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        Provider.hasMany(models.JobInterest, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Provider
}
