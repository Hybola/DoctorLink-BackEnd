module.exports = (sequelize, DataTypes) => {
    const PartTime = sequelize.define(
        'PartTime',
        {
            jobDes: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            startDateTime: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            endDateTime: {
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
