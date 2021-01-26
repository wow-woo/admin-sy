import {useForm} from 'react-hook-form'

export function Login() {
    const {register, watch} = useForm({})
    console.log(watch())
    return (
        <div className='h-full flex justify-center items-center'>
            <form className='w-1/3 grid gap-5'>
                <div className='flex'>
                    <label htmlFor="form-id"
                        className='self-center text-sy-main w-10'
                    >ID</label>
                    <input ref={register({
                        required:"msssg"
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
                        required:"msssg"
                    })} name='password' type="password" id='form-password'
                        className='rounded-3xl border-2 border-sy-guide text-sy-guide w-full p-3'
                    />
                </div>
                <div className='mt-5 pl-10 grid grid-cols-2 gap-2'>
                    <button className='hover:bg-sy-blue-hover py-3 bg-sy-blue rounded-3xl text-white text-center'>
                        로그인
                    </button>
                    <button className='hover:bg-sy-hover-btn py-3 bg-sy-main hover:bg-sy-main-hover rounded-3xl text-white text-center'>
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    )
}