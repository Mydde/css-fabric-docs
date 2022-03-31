import React from "react";
import { useRouter } from "next/router";
import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
} from "src/components/Headers";
  
import { CssFabricProperties } from "src/components/CssFabricProperties";
  
import conf_fabric from "@medyll/cssfabric";

interface Props {}

const Text = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query; 

  const fabricModule = "text";

  const tagProperties = conf_fabric.getModuleData(fabricModule);

  
 
  let conf_text_data = conf_fabric.getModuleData(fabricModule); 
  let conf_text_docs = conf_fabric.getModuleDocs(fabricModule); 

  const {
    font_weights,
    text_transform,
    text_align,
    font_predefined_colors,
    font_sizes
  } = conf_text_data;

  const nb = font_sizes;


  return (
    <div>
      <SubHeader
        title={"text title H"}
        title_tag={".-h"}
        description={"Title sizes declaration"}>
        <div className="flex-h flex-wrap pad-all items-stretch">
          {[...Array(nb)].map((name, val) => (
            <div className={`flex-main flex-v`}>
              <div>{`h${val + 1}, .h${val + 1}`}</div>
              <div className={`h${val + 1} flex-main flex-h items-center`}>
                <div className={"self-end"}>title</div>
              </div>
            </div>
          ))}
        </div>
        <h4 className={"pad-all border-b dsp-inline"}>H text borders sticked to bottom</h4>
        <div className="flex-h flex-wrap pad-all items-end">
          {[...Array(nb)].map((name, val) => (
            <div className={`flex-main border-b pad-all-16`}>
              <span className={`h${val + 1}`}>{`.h${val + 1}`}</span>
            </div>
          ))}
        </div>
        <h4 className={"pad-all border-b dsp-inline"}>
          H text vertically aligned with sized borders
        </h4>
        <div className="flex-h flex-wrap pad-all-16 items-end">
          {[...Array(nb)].map((name, val) => (
            <div className={`flex-main  pad-all`}>
              <span className={`border-b h${val + 1}`}>{`.h${
                val + 1
              }`}</span>
            </div>
          ))}
        </div>
      </SubHeader>
      <SubHeader
        title={"text_align"}
        tag={"text alignments"}
        description={conf_text_docs["text_align"]}>
        <CssFabricProperties property={text_align} />
      </SubHeader>
      <SubHeader
        title={"text_transform"}
        tag={"text transforms"}
        description={conf_text_docs["text_transform"]}>
        <CssFabricProperties property={text_transform} />
      </SubHeader>
      <SubHeader
        title={"font_weights"}
        title_tag={"text weights"}
        description={conf_text_docs["font_weights"]}>
        <CssFabricProperties property={font_weights} />
      </SubHeader>
      
    </div>
  );
};

export default Text;
module.exports = Text;
