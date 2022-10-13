import { Fragment } from "react";


const Input = ({label, type, labelClass,
inputClass, inputId, placeholder, value, btnName, onChange
}) => {
    const input =["tel", "text", "email", 'password', "number"]
 return( <Fragment>
    <label className={`${labelClass} form-label`}>{label}</label>
   {input.indexOf(type) !== -1 && (
     <input 
     className={ `${inputClass} form-control`}
     type={type}
     id={inputId} 
     placeholder={placeholder}
     value={value}
     onChange={(e) => onChange(e.target.value)}
      />
   )}
    {type === "textarea" && (<textarea
        placeholder={placeholder}
        value={value}
        className={`${inputClass} form-control`}
        onChange={(e) => onChange(e.target.value)}>

    </textarea>)}
    {/* {type === "select" &&(
      <select onChange={(e)=> onChange(e.target.value)}>
        {Array.isArray(value)&&
        value.map((data)=>{
          return <option>{data}</option>;
        })}
      </select>)} */}

  {type === "button" && (<button 
  className="btn btn-primary mt-3 w-100">{btnName}</button>)}

</Fragment>
 );
};

export default Input