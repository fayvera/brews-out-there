import React, {useState} from 'react'

export default function Dropdown({title, items = [], multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open)

    function handleOnClick(item) {
        
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
                        <p> {open ? "Close" : "Open"} </p>
                    </div>
            </div>
            {open && (
                <ul className="dd-list"> 
                {items.map((item, index) => (
                    <li className="dd-list-item" key={index}>
                        <button type="checkbox" onClick={() => handleOnClick(item)}>
                            <span>{item.value}</span>
                            <span>Selected...</span>
                        </button>
                    </li>
                )
                )}
                </ul>)}
        </div>

        )

}