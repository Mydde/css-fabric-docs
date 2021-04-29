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

interface Props {
}

const Color = (props: Props) => {

    const a = conf_fabric["css-config"].modules.base._data.grid_class_name;

    return <div>
        <SubHeader title="text colors" description="naafa">
            de red
            {JSON.stringify(a,null)}
        </SubHeader>
        <SubHeader title="background-colors" description="naafa">
            de red
            {JSON.stringify(a,null)}
        </SubHeader>
    </div>;
};

export default Color;
