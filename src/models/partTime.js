module.exports = (sequelize, DataTypes) => {
    const PartTime = sequelize.define(
        'PartTime',
        {
            jobDes: {
                type: DataTypes.STRING,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            wage: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            other: {
                type: DataTypes.STRING,
            },
        },
        {
            underscored: true,
        }
    )
    PartTime.associate = (models) => {
        PartTime.belongsTo(models.JobPost, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
    }
    return PartTime
}
