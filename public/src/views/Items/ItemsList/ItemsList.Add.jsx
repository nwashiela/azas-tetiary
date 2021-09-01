import React from "react"
import styled from "styled-components"
import {Input} from "../../../components/Input"
import {layout} from "../../../components/layout"
import {tokens} from "../../../data/tokens"
import {useAdd} from "./ItemsList.useAdd"
import {ALERTS} from "./ItemsList.constants"

const InputWrapper = styled.div`
padding: ${tokens.spacing.s} 0;
`
/**
 * @typedef { object} Props
 * @proparty {boolean} open
 * @proparty {(response: Shoot) => void} onSave
 * @proparty {() => void} onClosed
 */

/**
 * 
 * @param {Props} props 
 * @returns {JSX.Element}
 */
export const Add = (props) => {
const {open, onSave, onClosed} = props;
const {name, upadte, surname,submit,date,location,priceInCents} = useAdd({ onSave})
    return (
        <layout 
        overlay= {open ? 'open' : 'closed'}
        title='Add Shoot'
        form
        padded
        aler={alert && ALERTS[alert]}
        primary={['Add', submit]}
        secondary={['Cancel', onClosed]}
        >
            <InputWrapper>
            <Input label='Name' name={name} onChange={updateLocale('name')} />
            </InputWrapper>

            <InputWrapper>
            <Input label='Name' name={surname} onChange={update('surname')} />
            </InputWrapper>

            <InputWrapper>
            <Input 
            accept="time"
            label="Time"
            value={date}
            onChange={update('date')} />
            </InputWrapper>

            <InputWrapper>
            <Input 
            label='Location' 
            location={location}
            onChange={update('Location')} />
            </InputWrapper>

            <InputWrapper>
            <Input 
            label='Price'
             value={priceInCents} 
             accept='currency'
            onChange={update('priceInCents')} />
            </InputWrapper>



        </layout>
    )
}

export default Add