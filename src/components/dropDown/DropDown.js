export default function Navbar({placeholder, optionList, onItemSelected, value}) {
    return(
        <select value={value} placeholder={placeholder} onChange={(event) => {
            onItemSelected(event.target.value);
        }} className="form-select">
            <option disabled={false} value="">
                {placeholder}
            </option>
            {optionList.map((option) => {
                return(
                    <option value={option} key={option}>{option}</option>
                )
            })}
        </select>
    )
}