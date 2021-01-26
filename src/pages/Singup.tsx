import {useForm} from 'react-hook-form'

interface IForm {
    id:string;
    password:string;
    rePassword:string;
}


export function Singup() {
    const { register, errors, watch,setError, getValues, handleSubmit } = useForm<IForm>({})
    const submitPassed=()=>{
        const passwords = watch(['password', 'rePassword'])
        console.log(passwords)
        if(passwords['password'] !== passwords['rePassword']){
            setError('password', {message:'비밀번호가 일치하지 않습니다'})
        }
    };
    const submitFailed=()=>null;
    console.log(errors)
    return (
        <div className='h-full flex justify-center items-center'>
        <form onSubmit={handleSubmit(submitPassed, submitFailed)} className='w-1/3 grid gap-5'>
            <div className='flex'>
                <label htmlFor="form-id"
                    className='self-center text-sy-main w-10'
                >ID</label>
                <input ref={register({
                    required:"아이디를 입력해주세요"
                })} name='id' type="text" id='form-id'
                    className='rounded-3xl border-2 border-sy-guide text-sy-guide w-full p-3'
                />
            </div>
            <div className='flex'>
                <label htmlFor="form-password"
                    className='self-center text-sy-main w-10'>
                    PW
                </label>
                <input ref={register({
                    required:"비밀번호를 입력해주세요",
                })} name='password' type="password" id='form-password'
                    className='rounded-3xl border-2 border-sy-guide text-sy-guide w-full p-3'
                />
            </div>
            <div className='flex'>
                <label htmlFor="form-rePassword"
                    className='self-center text-sy-main w-10'>
                    RE-PW
                </label>
                <input ref={register({
                    required:"비밀번호를 다시 한 번 입력해주세요"
                })} name='rePassword' type="password" id="form-rePassword"
                    className='rounded-3xl border-2 border-sy-guide text-sy-guide w-full p-3'
                />
            </div>
            <ul className='pl-14'>
                {errors.id?.message && <li className='text-sy-error'>{errors.id?.message}</li>}
                {errors.password?.message && <li className='text-sy-error'>{errors.password?.message}</li>}
                {errors.rePassword?.message && <li className='text-sy-error'>{errors.rePassword?.message}</li>}
            </ul>
            <div className='mt-5 pl-10'>
                <button className='w-full hover:bg-sy-blue-hover py-3 bg-sy-blue rounded-3xl text-white text-center'>
                    가입요청
                </button>
            </div>
        </form>
    </div>
    )
}