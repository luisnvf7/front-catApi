import { ChangeEvent, FC } from 'react'
import { DropdownProp } from '../interfaces/Props'

/* Componente de dropdown */
const Dropdown : FC<DropdownProp> = ({label, disabled, values, onSelect}) => {

    return (
        <div>
            <h3 style={{marginBottom: '0px'}}>{label}</h3>
            <select onChange={onSelect} disabled={disabled} className="select" title="select">
                {values.map((order, i) => (
                  <option key={i} value={order.id}>
                    {order.name}
                  </option>
                ))}
              </select>
        </div>
    )
}

export default Dropdown