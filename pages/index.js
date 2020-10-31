import React from "react"
import tw, { styled } from "twin.macro"
import { AccountCircle, SupervisedUserCircle, Twitter, Person, NoEncryptionRounded } from "@material-ui/icons"
import { Input, InputAdornment } from "@material-ui/core"


const ButtonLogin = styled.button`
      ${tw` ml-4 focus:outline-none text-white shadow-lg px-4 py-2 bg-purple-500 hover:bg-teal-400 w-24  `}

`
const ButtonSignup = styled.button`
      ${tw` ml-4 focus:outline-none text-gray-800 shadow-lg px-4 py-2 border border-teal-500 w-24  hover:bg-teal-400 `}

`

const Input1 = styled.input`
${tw` w-64 p-3 border border-gray-300 focus:shadow-lg   focus:outline-none focus:border-teal-500  m-4 `};
:focus{
  border:1px solid purple 
}
`

export default function Home() {
  return (
    <div css={tw` flex justify-center items-center  `}>
      <div css={tw` grid place-items-center md:py-24 md:w-2/3 md:shadow-xl  outline-none  m-24 `}>
        <p css={tw`text-3xl text-teal-900  p-5 font-thin`} >  WELCOME</p>
        <AccountCircle css={tw` text-purple-500 text-4xl`} ></AccountCircle>
        <div css={tw`flex items-center  content-between  justify-center p-3 m-5  border border-gray-400 shadow-lg  `} >
          <Person css={tw`text-purple-700 mr-6 `} />
          <input placeholder="username" css={tw` focus:outline-none`} />

        </div>

        <div css={tw`flex items-center  content-between  justify-center p-3 m-5  border border-gray-400 shadow-lg  `} >
          <NoEncryptionRounded css={tw`text-purple-700 mr-6 `} />
          <input placeholder="password" css={tw` focus:outline-none`} />

        </div>
        <ButtonLogin> Login </ButtonLogin>


        {/* <ButtonSignup>Sign Up</ButtonSignup> */}



      </div>
    </div >
  )
}
