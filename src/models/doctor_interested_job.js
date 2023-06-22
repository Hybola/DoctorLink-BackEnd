module.exports = (sequelize, DataTypes) => {
    const DoctorInterestedJob = sequelize.define(
        'DoctorInterestedJob',
        {
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    )
    DoctorInterestedJob.associate = (models) => {
        DoctorInterestedJob.belongsTo(models.Doctor, {
            foreignKey: 'doctor_id',
            as: 'doctor',
        })
        DoctorInterestedJob.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post',
        })
    }
    return DoctorInterestedJob
}
