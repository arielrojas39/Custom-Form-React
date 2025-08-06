import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import CustomInput from './component/CustomInput'
import { schema, type FormValues } from '../models/form.model';

const CustomForm = () => { 
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema),
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }
    
    return(
        <form className='w-sm flex flex-col gap-4 border-2 rounded-2xl pl-10 pr-10 pt-5 pb-5 border-gray-600' onSubmit={handleSubmit(onSubmit)}>
           <CustomInput name='name' control={control} label='Nombre' type="text" error={errors.name}></CustomInput>
           <CustomInput name='email' control={control} label='Email' type="email" error={errors.email}></CustomInput>
           <CustomInput name='password' control={control} label='Password' type="password" error={errors.password}></CustomInput>
           <CustomInput name='confirmPassword' control={control} label='Confirm Password' type="password" error={errors.confirmPassword}></CustomInput>
           <button className='mt-5' type="submit">Submit</button>
        </form>
    )
}

export default CustomForm; 