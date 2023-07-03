module.exports = (sequelize, DataTypes) => {
    const FullTime = sequelize.define(
        'FullTime',
        {
            jobDes: {
                type: DataTypes.STRING,
            },
            workingDay: {
                type: DataTypes.STRING,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            salary: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            annual: {
                type: DataTypes.STRING,
            },
            benefit: {
                type: DataTypes.STRING,
            },
            other: {
                type: DataTypes.STRING,
            },
        },
        {
            underscored: true,
        }
    )
    FullTime.associate = (models) => {
        FullTime.belongsTo(models.JobPost, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
    }
    return FullTime
}
