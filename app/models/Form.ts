import  { Schema, model, models } from 'mongoose';

const formSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true }
);

const Form = models.Form || model('Form', formSchema);
export default Form;
