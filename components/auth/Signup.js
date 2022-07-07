import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { BiUserCircle} from 'react-icons/bi'
import { BsFillEyeFill} from 'react-icons/bs'
import { MdOutlineEmail} from 'react-icons/md'
import { RiCloseLine} from 'react-icons/ri'
import { AiTwotoneLock, AiFillEyeInvisible} from 'react-icons/ai'
import { useSnap } from '@mozeyinedu/hooks-lab'; 
import { handleSignup } from "./redux/auth";
import {
    AuthWrapper,
    Form,
    Title,
    SubTitle,
    InputWrapper,
    InputIcon,
    AuthLink,
    Error,
    Success,
    Close
} from "./styles/auth";

export const Signup=()=>{
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const {auth} = state;
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false);
    const [feedback, setFeedback] = useState({
        msg: auth.signin.msg,
        status: false
    });

    const { snap } = useSnap(.5);

    const intitialState = {
        email: '',
        username: '',
        password: '',
        cpassword: ''
    }
    const [inp, setInpt] = useState(intitialState)
    const getInput =(e)=>{
        const {name, value} = e.target;
        setInpt({...inp, [name]: value })
    }
  
    const submit =(e)=>{
        e.preventDefault();

        dispatch(handleSignup(inp))

        setFeedback({
            msg: auth.signin.msg,
            status: true
        })
    }

    const handleClose =()=>{
        setFeedback({
            msg: '',
            status: false
        })
    }

    useEffect(()=>{
        // empty form input
        auth.signup.status ? setInpt(intitialState) : setInpt({...inp, password: '', cpassword: ''})
   }, [auth.signup.status])
 
    return (
        <>
        <AuthWrapper>
            <Form onSubmit={submit}>
            <Title>Sign Up</Title>
            <SubTitle bottomMargin="20px">Forex Trading Solution for Everyone</SubTitle>
            {
                feedback.status ? (
                    auth.signup.msg ? 
                    (
                        auth.signup.status ? 
                    (
                        <Success>
                            <Close onClick={handleClose}>
                                <RiCloseLine />
                            </Close>
                            {auth.signup.msg}
                        </Success>
                    ) :
                    (
                        <Error>
                            <Close onClick={handleClose}>
                                <RiCloseLine />
                            </Close>
                            {auth.signup.msg}
                        </Error>
                    )
                    ): ''
                ):''
            }
            <InputWrapper>
                <InputIcon right="" left="0">
                <MdOutlineEmail />
                </InputIcon>
                <input
                    type="text" 
                    name="email"
                    value={inp.email || ''}
                    placeholder="Email Address"
                    onInput={getInput}
                />
            </InputWrapper>

            <InputWrapper>
                <InputIcon right="" left="0">
                    <BiUserCircle />
                </InputIcon>
                <input
                    type="text" 
                    name="username"
                    value={inp.username || ''}
                    placeholder="Username"
                    onInput={getInput}
                />
            </InputWrapper>

            <InputWrapper>
                <InputIcon right="" left="0">
                    <AiTwotoneLock />
                </InputIcon>
                <input
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={inp.password || ''}
                    placeholder="Password"
                    onInput={getInput}
                />
                <InputIcon onClick={()=>setShowPassword(!showPassword)} right="0" left="">
                    {showPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible /> }
                </InputIcon>
            </InputWrapper>

            <InputWrapper>
                <InputIcon right="" left="0">
                    <AiTwotoneLock />
                </InputIcon>
                <input
                    type={showCPassword ? "text" : "password"} 
                    name="cpassword"
                    value={inp.cpassword || ''}
                    placeholder="Confirm Password"
                    onInput={getInput}
                />
                <InputIcon onClick={()=>setShowCPassword(!showCPassword)} right="0" left="">
                    {showCPassword ? <BsFillEyeFill /> : <AiFillEyeInvisible />}
                </InputIcon>
            </InputWrapper>

            <InputWrapper>
                <input
                    {...snap()}
                    type="submit"
                    value={auth.signup.isLoading ? "loading..." : "Sign Up"}
                    disabled={auth.signup.isLoading ? true : false}
                />
            </InputWrapper>

            <SubTitle bottomMargin="0">
                Already have an Account?
                {" "}
                <Link href="/signin" passHref>
                    <AuthLink>Sign in</AuthLink>
                </Link>
            </SubTitle>

            </Form>

        </AuthWrapper>
        </>
    )
}