const utils = {

    isArrayOfTypes: (arr: any): string | boolean => {
        let ret = '';

        if (!Array.isArray(arr)) {
            return false;
        }
        if (arr.every(x => Array.isArray(x))) ret = 'arrays'
        if (arr.every(x => typeof x === 'string')) ret = 'strings'
        if (arr.every(x => typeof x === 'number')) ret = 'numbers'
        if (arr.every(x => typeof x === 'object' && !Array.isArray(x))) ret = 'objects'

        return ret;
    },

    isObjectOfTypes: (arr: any): string | boolean => {

        if (Array.isArray(arr)) {
            return false;
        }

        let ret = '';
        let arrValues = Object.values(arr);

        if (arrValues.every(x => Array.isArray(x))) ret = 'arrays'
        if (arrValues.every(x => typeof x === 'string')) ret = 'strings'
        if (arrValues.every(x => typeof x === 'number')) ret = 'numbers'
        if (arrValues.every(x => typeof x === 'object' && !Array.isArray(x))) ret = 'objects'

        return ret;
    }
}

export const htmlUtils = {
    enclose: (content: any, tag: string = 'div') => {
        return (<div className={"cell-spacing cell-padding"}>{content}</div>)
    }
}
export default utils;