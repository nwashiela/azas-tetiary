import React from "react"
import styled from "styled-components"

import {Input} from "../../../components/Input"
import {Layout} from "../../../components/Layout"
import {tokens} from "../../../data/tokens"
import {useFitering} from "./ItemsList.useFitering"
import {ALERTS} from "./ItemsList.constants"

const SORTING_OPTIONS = [
    'Sooner - Later',
   ' Later - Sooner',
    'A-Z',
    'Z-A',
    'Most Expensive - least expensive',
     'Least Expensive - Most expensive'
]

const InputWrapper = styled.div`
padding: ${tokens.spacing.s} 0;
`
export const Filtering = (props) => {
const {open, onSave, onClosed} = props;

const {name, upadte, surname,submit,date,location,priceInCents} = useFitering({ onSave})
    return (
        <Layout 
        overlay= {open ? 'open' : 'closed'}
        title='Add Shoot'
        form
        padded
        aler={alert && ALERTS[alert]}
        primary={['Add', submit]}
        secondary={['Cancel', onClosed]}
        >
            <InputWrapper>
            <Input label='Sorting' name={null} onChange={console.log('name')} options={SORTING_OPTIONS} />
            </InputWrapper>
        </Layout>
    )
}

export default Filtering