import {model, Schema} from 'mongoose';
import {PasskeyUserPost} from '../../types/PasskeyTypes';

const PasskeyUserSchema = new Schema<PasskeyUserPost>({
  // TODO: add userId (Number, required, unique)
  userId:{type: Number, required: true, unique: true},
  email:{type: String, required: true, unique: true},
  devices:{
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'AuthenticatorDevice'
  },
  // TODO: add email (String, required, unique)
  // TODO: add devices (Array of ObjectIds, required, ref: 'AuthenticatorDevice')
});

export default model<PasskeyUserPost>('PasskeyUser', PasskeyUserSchema);
