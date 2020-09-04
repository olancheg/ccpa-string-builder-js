declare const SPEC_VERSION = 1;
declare const NA = "-";
declare const YES = "Y";
declare const NO = "N";
declare const _convert: (value: boolean) => string;
interface Arguments {
    explicitOptOut?: boolean;
    optOutSale?: boolean;
    lspa?: boolean;
}
declare const CCPAStringBuilder: (args: Arguments) => string;
