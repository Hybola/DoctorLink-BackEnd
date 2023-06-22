module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post',
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
    Post.associate = (models) => {
        Post.hasMany(models.PartTime, {
            foreignKey: {
                name: 'postId',
                allowNull: false,
            },
        })

        Post.hasMany(models.FullTime, {
            foreignKey: {
                name: 'postId',
                allowNull: false,
            },
        })
        Post.belongsTo(models.Provider, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
            as: 'provider',
        })
        Post.hasMany(models.DoctorInterestedJob, {
            foreignKey: {
                name: 'postId',
                allowNull: false,
            },
        })
    }

    return Post
}
