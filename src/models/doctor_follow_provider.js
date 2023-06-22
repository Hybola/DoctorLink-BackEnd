module.exports = (sequelize, DataTypes) => {
    const DoctorFollowProvider = sequelize.define(
        'DoctorFollowProvider',
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
    DoctorFollowProvider.associate = (models) => {
        DoctorFollowProvider.belongsTo(models.Doctor, {
            foreignKey: 'doctor_id',
            as: 'doctor',
        })
        DoctorFollowProvider.belongsTo(models.Provider, {
            foreignKey: 'provider_id',
            as: 'provider',
        })
    }
    return DoctorFollowProvider
}
