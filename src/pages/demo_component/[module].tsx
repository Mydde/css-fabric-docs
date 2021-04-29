import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
 
import conf_fabric from "cssfabric";

import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
  HeaderSiteTitle,
} from "src/components/Headers";

const links = {
  color: "colors-98",
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

const Modulo = ({ props }) => {
  const router = useRouter();

  const { module } = router.query;

  let moduleTag;
  let DynamicComponent;
  // @ts-ignore
  const tagProperties = conf_fabric.getModuleMetaData(module);

  if (module != undefined) {
    // @ts-ignore
    moduleTag = module?.charAt(0)?.toUpperCase() + module?.slice(1) || "Demo";

    DynamicComponent = dynamic(import("src/components/Demo/" + moduleTag));
  }

  //
  if (module === undefined || !moduleTag || !DynamicComponent) return null;

  return (
    <div className={"grid-h grid-wrap h-full content-start overflow-auto"}>
      <div className={"w-full w-sm-main  pos-sticky"}>
        <HeaderSiteTitle
          title="cssfabric"
          title_tag={"just.fabric.it"}
          description={"desc"}
        />
      </div>
      <aside className={"w-16 w-sm-8 grid-v content-start"}>
        <nav className={"pad-all-16"}>
          <ul className={"menu-v"}>
            {Object.keys(links).map((key, index) => {
              return (
                <li className={"pad-ii-4 pad-tb-8 menu-item hover-parent"}>
                  <Link key={key} href={`/demo_component/${key}`}>
                    <a>
                      <span className={"hover-show"}>set </span>
                      <span className={"hover-hide"}>{`${key}`}</span>
                      <span className={"hover-show txt-bold"}>{`${key}`} </span>
                      <span className={"hover-show"}> with cssfabric</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <section className={"grid-main pad-all-16"}>
        <Header
          title={"." + tagProperties.title}
          tag={"fabric.css." + tagProperties.title}
          description={tagProperties.description}
        />
        <div className={""}>
          <DynamicComponent />
        </div>
      </section>
    </div>
  );
};

export default Modulo;
// module.exports = Modulo
