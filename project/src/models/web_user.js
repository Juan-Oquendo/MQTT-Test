const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: { type: String, required: "The email is required", unique: true },
    password: { type: String, required: "Password is required" }
}, {
    timestamps: true
});

userSchema.methods.encryptPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}
/*
userSchema.method('encryptPassword', async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  })
*/
userSchema.methods.comparePassword = async function (password) {
    const matchPassword = await bcrypt.compare(password, this.password);
    return matchPassword;
}

userSchema.statics.createUser = async function(email, password) {
    const exist = await Web_user.findOne({ email });

    if(!exist){
        const user = new Web_user({ email, password });
        user.password = await user.encryptPassword(password);
        await user.save();
        return true;
    } else {
        return null;
    }
}


userSchema.statics.authenticate = async (email, password) => {
    const user = await Web_user.findOne({ email });

    if (user) {
        const match = await user.comparePassword(password);
        if (match) {
            return user;
        }
    } else {
        return null;
    }

}

const Web_user = model('Web_user', userSchema);
module.exports = Web_user;
