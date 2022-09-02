import './SearchInput.css';

export default function SearchInput({placeholder, onChangeText, value}) {
    return(
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"/>
            <input value={value} type="text" className="form-control" placeholder={placeholder} onChange={(e) => onChangeText(e.target.value)}/>
        </div>
    )
}