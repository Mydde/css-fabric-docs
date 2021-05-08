import cssfabric from "cssfabric";
import utils from "@/utils/utils";
import {htmlUtils} from "@/utils/utils";
import Examples from '@/components/Docs/Examples'

interface IDocs {
    module: any
}

export default function Docs(props: IDocs) {

    const {module} = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);

    function tre(part: any) {

        // if object, if array !!!
        // console.log(part)
        let out: any, levelValues: any;

        if (part && !Array.isArray(part) && typeof (part === "object")) {
            out = Object.keys(part).map((levelKey) => {
                let levelValue = part[levelKey]
                // console.log({levelKey, levelValue})
                if (Array.isArray(levelValue)) {
                    levelValues = levelValue.map(x => <div className={"marg-r-3"}>{x}</div>)
                }

                return (<div className={"grid-h"}>
                    <div className={"w-4 text-300 border-b marg-r-1"}>{levelKey}</div>
                    <div className={"marg-r-2"}>:</div>
                    {levelValues}
                </div>);
            })
        } else {

            switch (utils.isArrayOfTypes(part)) {
                case "strings":
                case "numbers":
                    out = <div className={"grid-h grid-inline"}>{part.map(x => <div
                        className={"marg-r-3"}>{x}</div>)}</div>;
                    break;
                case "arrays":
                    out = part.map((x) => x.join('  ')).map((x) => htmlUtils.enclose(x))
                    break;

            }

        }

        return out;
    }

    return (
        <div>
            {Object.keys(moduleAttributes).map((moduleAttribute: string) => {
                let moduleAttributeModel = moduleAttributes[moduleAttribute]

                let {tag, keys, levels, levelsDeclin, values, about} = moduleAttributeModel;
                let toParse = {keys, levels, levelsDeclin};

                return <div className={"pad-b-8"}>
                    <div className={"box-content"}>
                        <div
                            className={"grid-h grid-inline border-b  theme-border-primary align-middle cell-spacing marg-b-1"}>
                            <div className={"txt-400"}>{moduleAttribute}</div>
                            <label>{tag}</label>
                        </div>
                        <div className={"txt-gray-500 marg-b-2 "}>
                            {about}
                        </div>
                        <div className={"box-content marg-l-1 grid-h"}>
                            <div className={"cell-spacing grid-main"}>
                                {Object.keys(toParse).map((w: any) => {
                                    return (
                                        <div className={"grid-h  marg-b-4"}>
                                            <div className={"w-8"}>
                                                - {w}:
                                            </div>
                                            <div className={"grid-main"}>
                                                {tre(toParse[w])}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className={"cell-spacing grid-main"}>
                                <div className={"txt-800 border-b dsp-inline"}>
                                    cssfabric classnames
                                </div>
                                <div className={"txt-gray-300 marg-b-4"}>
                                    generated examples
                                </div>
                                <div className={""}>
                                    <div className={"grid-v border-l pad-l theme-border-primary "}>
                                        <Examples module={module} moduleAttribute={moduleAttribute}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
