import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pocket } from '../utils/PocketbaseClient'
function ErrorMessage(props)
{
   return(
    <>
    <span>{props.message}</span>
    </>
   )
}

export default ErrorMessage