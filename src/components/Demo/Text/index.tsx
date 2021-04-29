import React from "react";
import { useRouter } from "next/router";
import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
} from "src/components/Headers";

import conf_fabric from "css-fabric/_generated/css.fabric.config.json";
import { fabricModuleProperties } from "@/utils/fabricModuleProperties";
import { CssFabricProperties } from "src/components/CssFabricProperties";

interface Props {}

const Text = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  const fabricModule = "text";
  const tagProperties = fabricModuleProperties.getModuleConf({
    module: fabricModule,
  });

  let conf_text_meta = tagProperties.meta;
  let conf_text_data = tagProperties.data;
  let conf_text_docs = tagProperties.docs;

  const {
    font_weights,
    text_transform,
    text_align,
    font_predefined_colors,
  } = conf_text_data;

  return (
    <div>
      <SubHeader
        title={"text title H"}
        title_tag={".-h"}
        description={"Title sizes declaration"}>
        <div className="grid-h grid-wrap pad-all items-stretch">
          {[...Array(5)].map((name, val) => (
            <div className={`grid-main grid-v`}>
              <div>{`h${val + 1}, .h${val + 1}`}</div>
              <div className={`h${val + 1} grid-main grid-h items-center`}>
                <div className={"self-end"}>title</div>
              </div>
            </div>
          ))}
        </div>
        <h4 className={"pad-all brd-b dsp-inline"}>H text borders sticked to bottom</h4>
        <div className="grid-h grid-wrap pad-all items-end">
          {[...Array(5)].map((name, val) => (
            <div className={`grid-main brd-b pad-all-16`}>
              <span className={`h${val + 1}`}>{`.h${val + 1}`}</span>
            </div>
          ))}
        </div>
        <h4 className={"pad-all brd-b dsp-inline"}>
          H text vertically aligned with sized borders
        </h4>
        <div className="grid-h grid-wrap pad-all-16 items-end">
          {[...Array(5)].map((name, val) => (
            <div className={`grid-main  pad-all`}>
              <span className={`brd-b h${val + 1}`}>{`.h${
                val + 1
              }`}</span>
            </div>
          ))}
        </div>
      </SubHeader>
      <SubHeader
        title={"text_align"}
        tag={"text alignments"}
        description={tagProperties.docs["text_align"]}>
        <CssFabricProperties property={text_align} />
      </SubHeader>
      <SubHeader
        title={"text_transform"}
        tag={"text transforms"}
        description={tagProperties.docs["text_transform"]}>
        <CssFabricProperties property={text_transform} />
      </SubHeader>
      <SubHeader
        title={"font_weights"}
        title_tag={"text weights"}
        description={tagProperties.docs["font_weights"]}>
        <CssFabricProperties property={font_weights} />
      </SubHeader>
      
    </div>
  );
};

export default Text;
module.exports = Text;
