module.exports = (sequelize, DataTypes) => {
    const review = sequelize.define('review', {
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return review
}