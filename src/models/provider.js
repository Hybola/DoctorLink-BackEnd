module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define(
        'Provider',
        {
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
            healthProviderName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
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
    return Provider
}
