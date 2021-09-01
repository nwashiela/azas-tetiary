import React from "react"
import styled from "styled-components"
import { format as formatDate } from "date-fns"

import {Button} from "../../../components/Button"
import {Layout} from "../../../components/Layout"
import {Text} from "../../../components/Text"
import {ItemPreview} from "../../../data/ItemsPreview"
import {Filtering} from "../../../data/Filtering"


import {useItemsList} from "../../../data/useItemsList"
import {tokens} from "../../../data/tokens"
import {Add} from "../../../data/tokens"

const DateWrapper = styled.div`
padding: ${tokens.spacing.s} ;
`
const ButtonRow = styled.div`
display: flex;
justify-content": center;
pading-bottom:${tokens.spacing.m};
`
const ButtonWrap = styled.div`
padding: ${tokens.spacing.s} ;
`
export const ItemsList = () => {

    const {list,phase,cancel,saveFiltering,statFiltering, saveAdd,startAdd } = useItemsList();

    return (
        <Layout title='shoots' navigation="shoots">
          <ButtonRow>
            <ButtonWrap>
              <Butoon action={statFiltering}>Filtering</Butoon>
            </ButtonWrap>
 
            <ButtonWrap>
              <Butoon action={startAdd} importance='primary'>add shoot</Butoon>
            </ButtonWrap>

            <ButtonWrap>
              <Butoon action={toggleOverlay}>Filtering</Butoon>
            </ButtonWrap>
          <ButtonRow/>
          
          {list.map(({ date, location, surname, id, name}) => (
            <ItemPreview 
            key={id}
            title={`${name} ${surname}`}
            action="#"
            helper={location}
             >

             <DateWrapper>
               <Text size="s">{date ? formatDate(date, "dd MMM yyyy") : "No Date"} 
               </Text>
             </DateWrapper>
             </ItemPreview> 
          ))}
          <Add onClose={cancel} onSave={saveAdd} open={phase === 'adding'} />
          <Filtering onClose={cancel} onSave={saveFiltering} open={phase === 'filtering'} />

        </Layout>
    );
}; 
export default ItemsList