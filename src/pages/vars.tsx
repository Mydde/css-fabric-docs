import dynamic from "next/dynamic";

import cssfabric from "cssfabric";

export default function Vars({isConnected}) {

    const moduleAttributes = cssfabric.getModuleDocsAttributes('box');

    function tre() {

    }

    return (
        <div>
            {Object.keys(moduleAttributes).map((moduleAttribute: string) => {
                let moduleAttributeModel = moduleAttributes[moduleAttribute]

                let {tag, keys, levels, values, about} = moduleAttributeModel;

                return <div className={"pad-all"}>
                    <div className={"box-content shad-2"}>
                        <div>
                            {moduleAttribute} <label>{tag}</label>
                        </div>
                        <div className={"box-content"}>
                            <div>keys {keys?.map((x) => ' ' + x)}</div>
                            <div>levels {levels?.map((x) => ' ' + x)}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
