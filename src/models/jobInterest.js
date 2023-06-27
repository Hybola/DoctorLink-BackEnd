module.exports = (sequelize, DataTypes) => {
    const JobInterest = sequelize.define(
        'JobInterest',
        {
            status: {
                type: DataTypes.INTEGER,
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
    JobInterest.associate = (models) => {
        JobInterest.belongsTo(models.Provider, {
            foreignKey: {
                name: 'providerId',
                allowNull: false,
            },
        })
        JobInterest.belongsTo(models.JobPost, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
        JobInterest.belongsTo(models.Doctor, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
        })
    }

    return JobInterest
}
