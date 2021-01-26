import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

export function Header() {
    return (
        <header className='h-20 font-semibold border-2 py-5 px-10 text-sy-main text-xl flex justify-between items-end text-2xl'>
                <h1>로그인</h1>            
                <div>
                    <span className="mr-5 text-xl font-medium">LOG OUT</span>
                    <button>
                        <ArrowForwardOutlinedIcon/>
                    </button>
                </div>
        </header>
    )
}

