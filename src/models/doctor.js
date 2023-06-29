module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define(
        'Doctor',
        {
            firstName: {
                type: DataTypes.STRING,
            },
            lastName: {
                type: DataTypes.STRING,
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
            },
            profileImage: DataTypes.STRING,
            licenceNumber: DataTypes.STRING,
            thainationalId: DataTypes.STRING,
            coverImage: DataTypes.STRING,
            description: DataTypes.STRING,
            lineId: DataTypes.STRING,
            gender: DataTypes.INTEGER,
            birthDate: DataTypes.DATE,
            education: DataTypes.STRING,
            workExperience: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )
    Doctor.associate = (models) => {
        Doctor.hasMany(models.DoctorJob, {
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
    }
    return Doctor
}
