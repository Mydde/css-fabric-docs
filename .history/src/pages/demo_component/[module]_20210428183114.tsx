import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

import { fabricModuleProperties } from "@/utils/fabricModuleProperties";

import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
  HeaderSiteTitle,
} from "src/components/Headers";

const links = {
  text: "text-98",
  box: "box-98",
  grid: "grid-98",
  table: "grid-98",
  scale: "grid-98",
  input: "grid-98",
  overflow: "grid-98",
  zindex: "grid-98",
  menu: "grid-98",
};

// const DynamicComponent = dynamic((node) => import('../../components/Demo/'))

const Modulo = ({ props }) => {
  const router = useRouter();

  const { module } = router.query;

  let moduleTag;
  let DynamicComponent;
  // @ts-ignore
  const tagProperties = fabricModuleProperties.getModuleConf({ module: module });

  if (module != undefined) {
    // @ts-ignore
    moduleTag = module?.charAt(0)?.toUpperCase() + module?.slice(1) || "Demo";

    DynamicComponent = dynamic(import("src/components/Demo/" + moduleTag));
  }

  //
  if (module === undefined || !moduleTag || !DynamicComponent) return null;

  return (
    <div className={"grid-h grid-wrap h-full overflow-auto"}>
      <div className={"w-full w-sm-main h-8 pos-sticky"}  style={{marginTop:0}}>
        <HeaderSiteTitle tag={"css-fabric"} description={"desc"} />
      </div>
      <div className={"w-16 grid-v content-start"}>
        <ul className={"menu-v"}>
          {Object.keys(links).map((key, index) => {
            return (
              <li className={"pad-ii-4 pad-tb-8 brd-b"}>
                <Link key={key} href={`/demo_component/${key}`}>
                  <a>{`${key}`}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={"grid-main pad-all-1  overflow-auto h-full"}>
        <Header
          title={"."+tagProperties.title}
          tag={"fabric.css." + tagProperties.title}
          description={tagProperties.description}
        />
        <DynamicComponent />
      </div>
    </div>
  );
};

export default Modulo;
// module.exports = Modulo
