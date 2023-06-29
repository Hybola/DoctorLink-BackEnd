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
            },
            line: {
                type: DataTypes.STRING,
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
            status: {
                type: DataTypes.ENUM('active', 'inactive'),
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            stage: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    notEmpty: true,
                },
                //0=ยกเลิก 1=รออนุมัติ 2=อนุมัติ
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

        JobPost.hasOne(models.PartTime, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })

        JobPost.hasOne(models.FullTime, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
        JobPost.hasMany(models.DoctorJob, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
    }

    return JobPost
}
