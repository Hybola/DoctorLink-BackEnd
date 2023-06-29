module.exports = (sequelize, DataTypes) => {
    const DoctorJob = sequelize.define(
        'DoctorJob',
        {
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    notEmpty: true,
                },
            },
            // 0: unsaved , 1: saved , 2: interest
        },
        {
            underscored: true,
        }
    )
    DoctorJob.associate = (models) => {
        DoctorJob.belongsTo(models.JobPost, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
        DoctorJob.belongsTo(models.Doctor, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
        })
    }

    return DoctorJob
}
