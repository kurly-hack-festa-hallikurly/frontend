import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


import styled from "styled-components";
import apis from "../api/main";
import backBtn from "../images/backBtn.svg"

const Login = ()=>{
    const navigate = useNavigate();
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const [userId, setUserId] = useState();
    
    const login = (data)=>{
        return apis.postUser(data);
    }

    const loginMutate = useMutation(login, {
        onSuccess: (data)=>{
            setUserId(()=>(idRef.current.value));
            console.log(userId);
            console.log(data);
            navigate('/');
            
        }})

    const loginHandler = ()=>{
        const user_info = {
            user_id: idRef.current.value,
            user_pw: pwRef.current.value
        }
        loginMutate.mutate(user_info)
    }

    return(
        <>
            <StBox>
                <StNavBar>
                    <StBackBtn
                    onClick={()=>{navigate(-1)}}
                    ></StBackBtn>
                    <StLoginTitle>로그인</StLoginTitle>
                </StNavBar>
                <StInputWrapper>
                    <StIdInputField placeholder="아이디 입력" ref={idRef}></StIdInputField>
                    <StPwInputField placeholder="비밀번호 입력" type="password" ref={pwRef}></StPwInputField>
                    {/* <StInfoSave></StInfoSave> */}
                    <StLoginBtn
                    onClick={()=>{loginHandler()}}
                    // onClick={()=>console.log(idRef.current.value)}
                    >로그인</StLoginBtn>
                    <StSignupBtn>회원가입</StSignupBtn>
                    <StFindInfo></StFindInfo>
                </StInputWrapper>
            </StBox>
        </>
    );
}
const StFindInfo = styled.div`
`
const StSignupBtn = styled.div`
    display: flex;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
`
const StLoginBtn = styled.div`
    display: flex;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 48px;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
`
// const StInfoSave = styled.div`
// `
const StPwInputField = styled.input`
    width: 100%;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 0px 0px 6px 6px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    border-top: none;
`

const StIdInputField = styled.input`
    width: 100%;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 6px 6px 0px 0px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
`
const StInputWrapper =styled.div`
    width: 100%;
    height: 462.344px;
    box-sizing: border-box;
    padding: 40px 20px;
`
const StLoginTitle = styled.div`
    color: rgb(51, 51, 51);
    font-weight: 600;
    font-size: 16px;
`
const StBackBtn = styled.div`
    position: fixed;
    left: 10px;
    width: 44px;
    height: 44px;
    background-image: url(${backBtn});
`
const StNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 44px;
`
const StBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: fit-content;
`
export default Login;