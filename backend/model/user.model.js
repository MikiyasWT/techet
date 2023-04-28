const { DataTypes } = require("sequelize");


module.exports = (sequelize,DataTypes)=>{
    const user =sequelize.define("user", {
        firstname : {type:DataTypes.STRING},
        lastname : {type:DataTypes.STRING},
        gender : {
            type:DataTypes.ENUM('male', 'female'),
            defaultValue: 'male',
          },
        birthdate :{type : DataTypes.Date},
        phone: {type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        picture:{type:DataTypes.STRING}
    })
}  