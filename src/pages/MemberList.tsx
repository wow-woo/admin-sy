import { useForm } from "react-hook-form"

export const MemberList = () => {
    const {register} = useForm()
    return (
        <div className='grid grid-cols-3 h-full'>
            <section className='p-10 overflow-y-auto grid grid-cols-2 gap-3 auto-rows-min'>
                <div className='bg-no-repeat bg-auto bg-center w-full h-0 pt-ratio bg-pic-woman'></div>
                <div className='bg-no-repeat bg-auto bg-center w-full h-0 pt-ratio bg-pic-woman'></div>
                <div className='bg-no-repeat bg-auto bg-center w-full h-0 pt-ratio bg-pic-woman'></div>
                <div className='bg-no-repeat bg-auto bg-center w-full h-0 pt-ratio bg-pic-woman'></div>
                <div className='bg-no-repeat bg-auto bg-center w-full h-0 pt-ratio bg-pic-woman'></div>
            </section>
            <section className='p-5 overflow-y-auto'>
                <h1>귀여운닉네임</h1>
                <ul>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>학력</span>
                        서울, 경기북구
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>직업</span>
                        마른체형
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>나이</span>
                        30
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>지역</span>
                        서울, 경기
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>키</span>
                        170cm
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>체형</span>
                        슬림탄탄
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>종교</span>
                        무교
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>흡연</span>
                        비흡연
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>음주</span>
                        안마심
                    </li>
                </ul>
                <p className='text-sy-gy'>
                    안녕하세요! 귀엽고 예쁜 것들을 사랑하는 사람입니다!
                    만난 방법 보다는 사람을 더 중요하게 생각해요.
                    좋은 사람과 좋은 인연 만들어보고 싶습니다.  읽어주셔서
                    감사합니다. 좋은 하루 보내길 바래요!
                </p>
                <ul>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>가입</span>
                        2020. 07. 21 19:01
                    </li>
                    <li className='flex items-center'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>번호</span>
                        010-3214-2456
                    </li>
                </ul>
                <ul>
                    <li className='flex'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>사용</span>
                        <div>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                에게 더블하트 보내기 / -50HP / 2020. 07. 21 19:01
                            </p>
                            <p>
                                <span className='text-sy-blue'>큐티보이자객이셔</span>
                                에게 더블하트 보내기 / -50HP / 2020. 07. 21 19:01
                            </p>
                            <p>
                                <span className='text-sy-blue'>큐티보이자객</span>
                                의 하트 수락 / -50HP / 2020. 07. 21 19:01 /
                            </p>
                        </div>
                    </li>
                    <li className='flex'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>결제</span>
                        <div>
                            <p>
                                기본하트 50개 / 19,900원 / 2020. 07. 21 19:01 / 
                                기본하트패키지 100개 / 19,900원 / 2020. 07. 21 19:01
                            </p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className='flex'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>신고</span>
                        <div>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                에게 신고를 당함 / 사유 : 음란성 문자 / 2020. 07. 21 19:01
                            </p>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                을 신고/ 사유 : 음란성 문자 / 2020. 07. 21 19:01
                            </p>
                        </div>
                    </li>
                    <li className='flex'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>매너</span>
                        <div>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                에게 별점 1점을 줌 / 사유 : 연락이 된 후에 잠수를 타셨어요 ㅠㅠ / 2020. 07.21 19:01
                            </p>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                에게 별점 1점을 받음 / 사유 : 연락이 된 후에 잠수를 타셨어요ㅠㅠ / 2020. 07. 21 19:01
                            </p>
                        </div>
                    </li>
                    
                </ul>
                <ul>
                    <li className='flex'>
                        <span className='flex-grow-0 flex-sy-field text-sy-gy'>휴면</span>
                        <div>
                            <p>
                                <span>휴면</span>
                                2020. 07. 21 19:01
                            </p>
                            <p>
                                <span>휴면해제</span>
                                / 2020. 07. 21 19:01
                            </p>
                            <p>
                                <span className='text-sy-blue'>큐티보이1</span>
                                님과 커플휴면 / 2020. 07. 21 19:01
                            </p>
                            <p>
                                <span>큐티보이1</span>
                                님과 커플휴면 해제 / 2020. 07. 21 19:01
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className='p-5 overflow-y-auto'>
                <ul>
                    <li>
                        <h1>충전아이템주기</h1>
                        <section className='w-full flex justify-between'>
                            <div className='flex items-center'>
                                <label className='mr-2 w-5 flex-shrink-0' htmlFor="hp">HP</label>
                                <input ref={register({

                                })} id='hp' className='mr-3 block w-full p-1 flex-shrink box-border border-2 border-sy-guide rounded-2xl text-sy-guide' name='hp' type="number"/>
                            </div>
                            <div className='flex items-center'>
                                <label className='mr-2 w-5 flex-shrink-0' htmlFor="mp">MP</label>
                                <input ref={register({
                                    
                                })} id='mp' className='mr-3 block w-full p-1 flex-shrink box-border border-2 border-sy-guide rounded-2xl text-sy-guide'  name='mp' type="number"/>
                            </div>
                        </section>
                    </li>
                    <li>
                        <h1>알림메시지</h1>
                        <textarea ref={register()} className='w-full'  name="notice" 
                        placeholder='안녕하세요! 귀엽고 예쁜 것들을 사랑하는 사람입니다! 만난 방법 보다는 사람을 더 중요하게 생각해요. 좋은 사람과 좋은 인연 만들어보고 싶습니다.  읽어주셔서 감사합니다. 좋은 하루 보내길 바래요!' 
                        id="" cols={32} rows={7}>

                        </textarea>
                    </li>
                    <li>
                        <h1>블랙리스트 회원으로 관리</h1>
                        <div className='flex flex-wrap'>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">3일</span>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">1주일</span>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">2주일</span>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">1달</span>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">영구</span>
                            <span className="flex-sy-min border-2 border-sy-guide text-sy-guide rounded-3xl p-2 mr-2 mb-2">특별사면</span>
                        </div>
                        <textarea  ref={register()} className='w-full' name="blackNotice" 
                        placeholder='귀하는 음란/욕설 사유로 특정 기간동안 블랙리스트로 이용이 제한됩니다. 깨끗하고 매너있는 만남이 될 수 있도록 양해해주시길 바랍니다.' 
                        id="" cols={32} rows={7}>

                        </textarea>
                    </li>
                    <button className='hover:bg-sy-blue-hover py-3 bg-sy-blue rounded-3xl text-white text-center w-full'>적용하기</button>  
                </ul>
            </section>
        </div>
    )
}

