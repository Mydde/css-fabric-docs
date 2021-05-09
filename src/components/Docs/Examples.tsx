import cssfabric from "cssfabric";

interface IExamples {
    module: string;
    moduleAttribute: any;
}


export default function Examples(props: IExamples) {
    const {module, moduleAttribute} = props;
    
    
    const newOut = cssfabric.getClassNames.getModuleTagClassNames({module, moduleAttribute});
    
    
    return <div>
        {newOut.map((x, y) => <div key={x + y}>{x}</div>)}
    </div>
}