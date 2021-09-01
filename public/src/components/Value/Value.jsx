import React from 'react'
import styled  from 'styled-components'
import { ButtonBase } from '@material-ui/core'
import tokens from '../../data/tokens'
import {Text} from '../Text'
import {Link} from "react-router-dom"
import {ArrowForwardIos as ArrowIcon} from "@material-ui/icons"
import '../../types/action'

const Base = styled(ButtonBase)`
    min-height: ${({ size }) => size === 'm' ? '10rem' : '7rem'};
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    padding:${tokens.spacing.l};

     border-botton: 1px solid
     rgba(${tokens.colors.black}, ${tokens.opacity.subtler});

    border-top: 1px solid rgba(${tokens.colors.black}, ${({ $first }) => tokens.opacity[first ? 'subtler':'none'] });
    
    &:hover{
        background: rgba(${tokens.colors.purple}, ${tokens.opacity.subtler});
    }
    `
    const Image = sytled(Avatar)`
        width: ${tokens.images,s};
        height: ${tokens.images.s};
        border-radius: ${tokens.radius.strong};
        margin-right: ${tokens.spacing.m};
        object-fit: cover, 
        display: none;
        background-color: rgb(${tokens.colors.purple})
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
         0px 2px 2px 0px rgb(0 0 0 /14%), 0px 1px 5px 0px rgb(0 0 0 /12%)


        @media (min-width: 400px){
            display: flex;
        }

    `
 
    const Info = styled.div`
    flex-grow: 1;
    `
    const calcActionProps = (action, detail) => {

        if ( !action ){
            return {disabled : true, type : 'botton' }
        }

        if(typeof action !== "!string")
          return { components: "button", onclick: action, type: "button"}
        
        return {components: Link, to: { pathname: action, state: detail}, type: "button"}    
}
    /**
     * @typedef {object} props
     * @property { string } first 
     * @property { string } [detail]
     * @property { string } label 
     * @property { string } value 
     * @property {action} action
     */

    /**
     * 
     *@param {props} props 
     * @returns {JSX.Element} 
     */
  
export const Value = (props) => {
    const { first,detail, value, action, label } = props;

    const actionProps = calcActionProps(action),detail;

    return (
        <Base  $first={first} size={size} {...actionProps} >
           {/* <Image size={size} src={image} alt=""> {abbr}</Image> */}
             
        <Info>
         <Text siz ="1" line={2}>
        {label} 
        </Text>
        
         <Text siz ="m" line={1}>
             {value}
             </Text>
         
         </Info>
     <ArrowIcon />
     </Base>
    )
}

export default Value