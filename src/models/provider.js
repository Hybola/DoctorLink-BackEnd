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
                validate: {
                    is: /^[0-9]{10}$/,
                },
            },
            description: DataTypes.STRING,
            profileImage: {
                type: DataTypes.STRING,
                defaultValue:
                    'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000',
            },
            coverImage: {
                type: DataTypes.STRING,
                defaultValue:
                    'https://study.com/cimages/videopreview/7hfyoyse54.jpg',
            },
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
        // Provider.hasMany(models.JobInterest, {
        //     foreignKey: {
        //         name: 'providerId',
        //         allowNull: false,
        //     },
        //     onDelete: 'RESTRICT',
        // })
    }
    return Provider
}
