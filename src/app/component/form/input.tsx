import { Key, useState } from "react";
import { getPostIconByType, getPreIconByType } from "./icons";
import { ButtonType, Country, IInputProps } from "./interfaces";
import React from "react";


const Input: React.FC<IInputProps> = ({
    label,
    type,
    placeholder,
    countries,
    input,
    register,
    showIcon,
    onchange,
    disabled = false,
    isRequired,
    validations
}) => {
    const [value, setValue] = useState<Number | string >('');
    const [error, setError] = useState<string >('');

    const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        console.log(`type::${type} value::${value}`)

        setValue(value);

        onchange(value);
    }

    const validateField = (value: string) => {
        if(validations?.length){
            validations.forEach((fn: Function)=>{
                if(fn(value)){
                    setError(fn(value));
                    return;
                }
            })
        }

        return
    }

    return <>
        <div className={"aegov-form-control mb-4" + (error ? " control-error" : "")}>
            <label htmlFor="search_prefix" data-testid="input-label">{label}</label>
            <div className="form-control-input">
                <span className="control-prefix">
                    {(type === ButtonType.TEL && countries && countries.length > 0) ?
                        (<select className="w-[100px]" id="country_code" name="country_code" autoComplete="tel-country-code"
                            aria-label="Country code">
                            {countries.map((country: Country, key: Key) => (
                                <option value={country.code} key={key}>{country.name}</option>
                            ))}
                        </select>) : <></>}
                    {showIcon ? getPreIconByType(type) : <></>}
                </span>
                <input
                    data-testid="input-test-element"
                    type={type}
                    name="search_prefix"
                    id="search_prefix"
                    placeholder={placeholder}
                    value={typeof value === "string" ? value : Number(value)}
                    onChange={onChangehandler}
                    disabled={disabled}
                    aria-disabled={disabled}
                    {...register(input)}
                />
                {/* {type === ButtonType.TEXT ? <output className="w-[50px] text-sm text-end h-auto bg-transparent py-1" id="rangeelemoutput">
                    {Number(value)}
                </output> : <></>
                } */}
                <span className="control-suffix">
                    {showIcon ? getPostIconByType(type) : <></>}
                </span>
            </div>
            {error ? <p className="error-message"><strong>Error:</strong> {error}</p> : <></>}

        </div>

    </>;
}

export default Input;