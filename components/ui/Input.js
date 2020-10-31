import React, { useState } from 'react'
import { AccountCircle, Person, NoEncryptionRounded } from "@material-ui/icons"
import tw from "twin.macro"
const Input = (props) => {
    return (
        <div css={tw`flex items-center  content-between  justify-center p-3 m-5  border border-gray-400 shadow-lg  `} >
            <Person css={tw`text-purple-700 mr-6 `} />
            <input onChange={(evt) => props.Value(evt.target.value)} placeholder={props.placeholder} css={tw` focus:outline-none`} />

        </div>
    )
}

export default Input
