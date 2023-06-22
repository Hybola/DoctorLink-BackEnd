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
            healthProviderName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            mobile: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/,
                },
            },
            profileImage: DataTypes.STRING,
            coverImage: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )
    Provider.associate = (models) => {
        Provider.hasMany(models.Post, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        Provider.hasMany(models.DoctorFollowProvider, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Provider
}
