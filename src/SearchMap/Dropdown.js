import React, {useState} from 'react'

export default function Dropdown({title, item, multiSelect = false}){
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    function handleClick(item) {

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
            </div>

        </div>
    )
}