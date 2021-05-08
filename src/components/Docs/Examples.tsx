import cssfabric from "cssfabric";
import utils from "@/utils/utils";
import {htmlUtils} from "@/utils/utils";

interface IExamples {
    module: string,
    moduleAttribute: any;
}

export default function Examples(props: IExamples) {

    const {module, moduleAttribute} = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);

    const fabricAttributes = moduleAttributes[moduleAttribute];
    const moduleTag = fabricAttributes['tag'];
    const moduleKeys = fabricAttributes['keys'] || [];
    const moduleLevels = fabricAttributes['levels'] || [];
    const moduleLevelsDeclined = fabricAttributes['levelsDeclin'] || undefined;
    const moduleClassNames = fabricAttributes['classNames'] || {};

    function fromModule(module: string, fabricTag: any) {
        return fromTag(fabricTag)
    }

    function concatenateIt(levels, levelKey, levelValue) {
        return levels[levelKey].map((declinedValue) => {
            // beware : if "_" !
            let out = (declinedValue === '_') ? [moduleTag, levelValue] : [moduleTag, levelValue, declinedValue];
            return out.join('-')
        })
    }

    function fromTag(fabricTag: string) {
        let out;
        const collectOut = {};

        // if keys
        if (moduleKeys.length) {
            // if keys: string[]
            if (utils.isArrayOfTypes(moduleKeys || []) === 'strings') {
                out = (<div>{moduleKeys.map(x => {
                    return <div>{fabricTag + '-' + x}</div>
                })}</div>)

                // if levels are objects ( of arrays )
                if (utils.isObjectOfTypes(moduleLevels) === 'arrays') {

                    let moduleLevelsKeys = Object.keys(moduleLevels);

                    // loop onto keys
                    moduleKeys.slice(0, 3).forEach((moduleKey) => {
                        collectOut[moduleKey] = [];
                        // if in levels
                        if (moduleLevels[moduleKey]) {
                            let fabricLevelValues = moduleLevels[moduleKey]; //.slice(0,1);
                            // loop to concatenate with levelsKeys
                            fabricLevelValues.forEach((levelValue) => {
                                // is there declined levels ?
                                if (moduleLevelsDeclined && moduleLevelsDeclined[moduleKey]) {
                                    // console.log({moduleLevelsDeclined, moduleKey, levelValue})
                                    collectOut[moduleKey] = collectOut[moduleKey].concat(concatenateIt(moduleLevelsDeclined, moduleKey, levelValue));
                                    // console.log(levelValue, moduleLevelsDeclined[moduleKey])
                                } else {
                                    // normal levels, non declined
                                    collectOut[moduleKey].push([fabricTag, moduleKey, levelValue].join('-'))
                                }
                            })
                        } else {
                            moduleLevelsKeys.forEach((levelKey: string) => {
                                collectOut[moduleKey] = collectOut[moduleKey].concat(concatenateIt(moduleLevels, levelKey, moduleKey + '-' + levelKey))
                            })
                        }
                    })

                    out = (<div>{Object.values(collectOut).map((x: any) => {
                        return <div>
                            <div><br/></div>
                            {x.map(done => <div>{done}</div>)} </div>
                    })}</div>)
                }
            }
        } else {
            // si levels
            if (moduleLevels.length) {
                if (Array.isArray(moduleLevels)) {
                    switch (utils.isArrayOfTypes(moduleLevels)) {
                        case "strings":
                        case "numbers":
                            // moduleLevels.map(x=>x);
                            // console.log(moduleLevels.map(x => fabricTag + '-' + x))
                            collectOut['red'] = moduleLevels.map(x => fabricTag + '-' + x)
                            break;
                    }

                }
            }
            // if moduleClassNames
            if (Object.keys(moduleClassNames).length) {
                if (utils.isObjectOfTypes(moduleClassNames) === 'objects') {
                    Object.keys(moduleClassNames).forEach((classNameKey: string) => {
                        let classNameValues = moduleClassNames[classNameKey];
                        //
                        let test = classNameValues.map(x => classNameKey + '-' + x)
                        console.log({classNameKey,classNameValues, test})
                    })
                }
            }

            // console.log({collectOut})
            out = (<div>{Object.values(collectOut).map((x: any) => {
                return <div>
                    <div><br/></div>
                    {x.map(done => <div>{done}</div>)} </div>
            })}</div>)
        }


        console.log(collectOut)
        return out;
    }

    return <div>
        {fromModule(module, moduleTag)}
    </div>
}