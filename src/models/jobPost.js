module.exports = (sequelize, DataTypes) => {
    const JobPost = sequelize.define(
        'JobPost',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            map: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            line: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            jobType: {
                type: DataTypes.ENUM('FullTime', 'PartTime'),
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            phone: {
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
    JobPost.associate = (models) => {
        JobPost.belongsTo(models.Provider, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            as: 'provider',
        })

        JobPost.belongsTo(models.Province, {
            foreignKey: {
                name: 'provinceId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        JobPost.hasMany(models.Parttime, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })

        JobPost.hasMany(models.Fulltime, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
        JobPost.hasMany(models.SavedJob, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
    }

    return JobPost
}
