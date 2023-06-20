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
            email: {
                type: DataTypes.STRING,
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
            coverImage: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )
    return Doctor
}
