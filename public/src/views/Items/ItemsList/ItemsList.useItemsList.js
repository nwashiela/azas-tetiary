import { useState} from "react"
import { useMount } from "react-use"
import {shoots} from "../../api/shoots"
import  "../../types/Shoots"

/**
 * @typedef {'resting' | 'adding' | 'filtering'} phase
 */

export const useItemslist = () => {

  /**
   * @typedef {[phase, (newPhase:phase) => void]}
   */
  
  const[phase, setPhase] = useState('resting')
  /**
   * @type {[Shoot[], (newValue: Shoot[])] => void}
   */
  const [list, setList] = useState([])

  const startAdd =() => phase('adding')
  const cancel = () => setPhase('resting')
  const startFiltering =() => phase('filtering')

  const saveAdd = (newShoot) = {
    setList([newShoot, ...List]);
     setPhase('resting');
  }

  const saveFiltering = (newFiltering) => {
    console.log(newFiltering)
    setPhase('resting')
  }
  useMount(async () => {
    const result = await shoots.search(true, {
      sorting: 'date',
    
    })
    setList(result)
  })
  return {
    Phase,
    list,
    alert,
    startAdd,
    startFiltering,
    cancel,
    saveAdd,
    saveFiltering
  }
}