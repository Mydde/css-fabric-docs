import Link               from "next/link";
import {fabricNavigation} from "@/utils/utils";

interface IMenu {
    module: string,
    action: string
}

const InnerMenu = (props: IMenu) => {
    
    const {module, action} = props;
    
    
    return <ul className={"menu-xl-h menu-v menu-small shad-8"}>
        <li className={(action==='demo')? 'active':''}>
            <Link href={fabricNavigation.getModuleDemoPage(module)}>
                <a>Demo</a>
            </Link>
        </li>
        <li className={(action==='classnames')? 'active':''}>
            <Link href={fabricNavigation.getModuleClassNamesPage(module)}>
                <a>Classnames</a>
            </Link>
        </li>
        <li className={(action==='docs')? 'active':''}>
            <Link href={fabricNavigation.getModuleDocsPage(module)}>
                <a>Docs</a>
            </Link>
        </li>
    </ul>
}


export default InnerMenu;