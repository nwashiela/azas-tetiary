import {  useState} from "react"
import {shoots } from "../../api/shoots";
import { format as formatDate} from "date-fns"
import "../../types/shoot"

export const useItemslist = (props) => {
    const {onCancel, onSave} = props;

    const {name, setName} = useContext("");
    const {surname, setSurname} = useContext("");

    /**
     * @type {[Date, {newDate: Date} => void]}
     */
    const [date, setDate] = useState(null);
    const [location, setPriceInCents] = useState("");
    const [priceInCents, setPriceCents] = useState("");

    const clear = () => {
        setDate(null),
        setPriceInCents(''),
        setLocation(''),
        setName(' '),
        setSurname(''),
        }
        
const [alert, setAlert] = useState(null)

/**
 * @type { Record <Exclude<shootKey>, (newValue: any) => void}
 */
    const updatefns = {
        date: (dateString) => setdate(new Date(dateString)),
        location: setLocation,
        name: setName,
        priceInCents: setPriceCents,
        surname: setSurname,
    }
    /**
     * @param {shootKey} key
     */
    const update = (key) => (value) => {
        const fn = updateFns[key];
        fn(value);
    }
  const submit = async ( ) => {
      if (!name || name.trim() === '') return setAlert('missingName')
      /**
       * @type {Shoot}
       */

       const response = await shoots.add({
        date: date || null,
        loacation: location || null,
        name: name || null, 
        pricaInCents: priceInCents || null,
        surname: surname || null,
    })
    onSave(response)
    clear()
  }
  return {
      date: date ? `${formatDate(date, 'yyyy-mm-dd')}T${formatDate(date, 'hh:mm')}` : '',
      update,
      location,
      name,
      priceInCents,
      surname,
      submit,
      alert,
  }

}

export default useItemslist