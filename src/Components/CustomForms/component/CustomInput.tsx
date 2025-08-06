import { Controller, type FieldError, type Control} from 'react-hook-form'
import type { FormValues } from '../../models/form.model';

interface Porps{
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError
}

const InputForm = ({name, control, label, type, error}: Porps) => {
    return (
            <div className='form-group flex flex-col justify-between gap-2'>
                <label className='mb-0.5 font-bold' htmlFor={ name }> { label } </label>
                <Controller
                    name={name}
                    control={control}
                    render={({ field })=>
                    <input id={ name } type={ type } {...field} className='rounded-lg p-1 pl-2 pr-2 text-sm border-2 border-gray-600 bg-black {`form-control ${error ? " is-invalid" : "" }`}'></input>}>
                </Controller>
                {error && <p className='error text-red-600 max-w-2xl mt-1'>{error.message}</p>}
            </div>
    )
}

export default InputForm