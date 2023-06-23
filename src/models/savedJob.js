module.exports = (sequelize, DataTypes) => {
    const SavedJob = sequelize.define(
        'SavedJob',
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
    SavedJob.associate = (models) => {
        SavedJob.belongsTo(models.Doctor, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        SavedJob.belongsTo(models.JobPost, {
            foreignKey: {
                name: 'jobPostId',
                allowNull: false,
            },
        })
    }
    return SavedJob
}
