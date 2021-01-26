import { Login } from "./Login";
import { MemberList } from "./MemberList";
import { Singup } from "./Singup";

export function MainBlock() {
    return (
        <div className='h-main'>
            {/* <Login /> */}
            {/* <Singup /> */}
            <MemberList/>
        </div>
    )
}

