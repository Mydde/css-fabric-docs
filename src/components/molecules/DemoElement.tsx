import cssfabric               from "cssfabric";
import {JSXElementConstructor} from "react";

interface IDemoElement {
    module?: string;
    cssFabricClassName?: any;
    moduleAttribute?: any;
    children?: any;
}


export default function DemoElement(props: IDemoElement) {
    
    const {module} = props;
    
    let out;
    
    function DrawIt(props?: any): any {
        
        const childrens = props?.children;
        
        switch ('mod') {
            default:
                out = <div className={'w-8 scale-h-4 border-1 marg'}>
                    {/*{childrens}*/}
                    <div className={props.cssFabricClassName}>
                        {props.cssFabricClassName}
                    </div>
                </div>
        }
        return out;
    }
    
    return DrawIt(props)
}

/*
 <span className={"w-sm-full w-md-mid w-xl-tiers w-quarter "+className}
 key={className + y}>.{className}</span>*/
