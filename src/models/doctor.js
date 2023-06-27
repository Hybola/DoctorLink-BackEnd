module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define(
        'Doctor',
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            profileName: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mobile: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/,
                },
            },
            profileImage: DataTypes.STRING,
            licenceNumber: DataTypes.STRING,
            thainationalId: DataTypes.STRING,
            coverImage: DataTypes.STRING,
            description: DataTypes.STRING,
            lineId: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )
    Doctor.associate = (models) => {
        Doctor.hasMany(models.SavedJob, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        Doctor.hasMany(models.Follow, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        Doctor.hasMany(models.JobInterest, {
            foreignKey: {
                name: 'doctorId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Doctor
}
