import React, {useState} from 'react'

export default function Dropdown({title, items = [], multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open)

    const handleOnClick = (item) => {
        if(!selection.some(current => current.id == item.id)){
            setSelection([...selection], item)
        } else{
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            )
           setSelection([...selectionAfterRemoval])

        }
    }

    const isItemSelected = item => {
        if (selection.find(current => current.id == item.id)){
            console.log("selected")
            return true
        }
        return false
    }

    return(
        <div className='dd-wrapper'>
            <div tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >
                    <div className='dd-header_title'>
                        <p className="dd-header__title--bold"> {title} </p>
                    </div>
                    <div className="dd-header__action">
                        <p> {open ? "Done" : "Open"} </p>
                    </div>
            </div>
            {open && (
                <ul className="dd-list"> 
                {items.map((item, index) => (
                    <li className="dd-list-item" key={index}>
                        <button type="checkbox" onClick={handleOnClick}>
                            <span>{item.type}</span>
                            <span>{isItemSelected(item) && "Selected"}</span>
                        </button>
                    </li>
                )
                )}
                </ul>)}
        </div>

        )

}