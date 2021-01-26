import { LoginBtn } from "./LoginBtn";

export function Aside() {
    return (
        <div className='flex flex-col font-semibold text-lg bg-sy-main min-w-aside min-h-full text-white'>
            <h1 className='h-20 mx-5 tracking-max py-5 text-center text-3xl text-sy-blue'>소개팅연구소</h1>     
            <ul className='py-5 mx-5 border-t-2 border-sy-gy'>
                <h3 className='py-5 text-sm text-sy-gy'>회원관리</h3>
                <li className='hover:bg-sy-main-hover py-5'>가입승인</li>
                <li className='hover:bg-sy-main-hover py-5'>회원목록</li>
                <li className='hover:bg-sy-main-hover py-5'>탈퇴회원관리</li>
            </ul>
            <ul className='py-5 mx-5 border-t-2 border-sy-gy'>
                <h3 className='py-5 text-sm text-sy-gy'>시스템관리</h3>
                <li className='hover:bg-sy-main-hover py-5'>공지사항</li>
                <li className='hover:bg-sy-main-hover py-5'>Q&A</li>
                <li className='hover:bg-sy-main-hover py-5'>쿠폰관리</li>
            </ul>
            <LoginBtn />
        </div>
    )
}