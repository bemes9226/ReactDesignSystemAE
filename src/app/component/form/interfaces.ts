

export enum ButtonType {
    TEXT = "text",
    URL = "url",
    SEARCH = "search",
    DATE = "date",
    DATE_AND_TIME = "datetime-local",
    MONTH = "month",
    PASSWORD = "password",
    RANGE = "range",
    NUMBER = "number",
    TEL = "tel"
}

export type Country = {
    name: string,
    code: string
}

interface ICountryOptionalProps {
    countries?: Array<Country>
}

export interface IInputProps extends ICountryOptionalProps  {
    label: String;
    type: ButtonType;
    placeholder: string;
    isRequired: boolean;
    onchange: Function;
    input: string;
    register: Function;
    showIcon?: boolean;
    disabled?: boolean;
    validations?: Array<Function>;
    customIcon?: SVGAElement;
}