import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

export interface User {
   _id?: string;
   username: string;
   email: string;
   password: string;
   vs: VS[];
   verfified: boolean;
   os: string;
   comparePassword?: (password: string, hashPassword: string) => boolean


}


interface VS {
   id: string;
   name: string;
   votes: number;
   oponent: string;
   timeOpen: Date;
   timeClose: Date;
}

const User: Schema<User> = new Schema({
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   vs: {
      type: [Array],
      required: true
   },
   verfified: {
      type: Boolean,
      required: true
   },
   os: {
      type: String,
      required: true
   }
})

User.pre('save', async function () {
   const user = this

   if (user.isModified('password')) {
      const hash = await bcrypt.hash(user.password, 12)
      user.password = hash
   }

})


User.methods.comparePassword = async function (this, hashPassword: string) {
   const user = this;
   const compare = await bcrypt.compare(hashPassword, user.password)

   return compare;

}

export default mongoose.models.User || mongoose.model("User", User)