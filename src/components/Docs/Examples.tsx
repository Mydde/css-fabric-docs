import cssfabric from "cssfabric";
import utils from "@/utils/utils";
import { htmlUtils } from "@/utils/utils";

interface IExamples {
  module: string;
  moduleAttribute: any;
}

interface Backpack<Type> {
  [key: string]: Type;
}

export default function Examples(props: IExamples) {
  const { module, moduleAttribute } = props;
  const moduleAttributes = cssfabric.getModuleDocsAttributes(module);

  const fabricAttributes = moduleAttributes[moduleAttribute];
  const moduleTag = fabricAttributes["tag"];
  const moduleKeys = fabricAttributes["keys"] || [];
  const moduleLevels = fabricAttributes["levels"] || [];
  const moduleLevelsDeclined = fabricAttributes["levelsDeclin"] || undefined;
  const moduleClassNames = fabricAttributes["classNames"] || {};

  let MAIN_COLLECT = [];

  function fromModule(module: string, fabricTag: any) {
    return fromTag(fabricTag);
  }

  function concatenateIt(levels, levelKey, levelValue) {
    return levels[levelKey].map((declinedValue) => {
      // beware : if "_" !
      let out =
        declinedValue === "_"
          ? [moduleTag, levelValue]
          : [moduleTag, levelValue, declinedValue];
      return out.join("-");
    });
  }

  function parseKeys() {
    // if keys
    if (moduleKeys.length) {
      console.log(" moduleKeys " + qualify(moduleKeys));

      switch (qualify(moduleKeys)) {
        case "arrayOfstrings":
        case "arrayOfnumbers":
          const classNameList = moduleKeys.map((levelKey) => {
            if (moduleLevels[levelKey]) {
              parseLinkedLevel(levelKey);
            }
            return moduleTag + "-" + levelKey;
          });

          parseLevelWithKeys(classNameList);

          MAIN_COLLECT = MAIN_COLLECT.concat(classNameList);

          break;
        case "arrayOfobjects":
          break;
        case "arrayOfarrays":
          // flatten ?

          let out = moduleKeys.flat().map((levelKey) => {
            if (moduleLevels[levelKey]) {
              parseLinkedLevel(levelKey);
            }
            return moduleTag + "-" + levelKey;
          });

          MAIN_COLLECT = MAIN_COLLECT.concat(out);

          break;
      }

      // console.log('parseKeys', classNameList)
    }
  }

  function parseLevelWithKeys(classNameList) {
    console.log({ classNameList });
    //return;
    if (!classNameList) return;
    if (Array.isArray(moduleLevels)) {
      let out = moduleLevels
        .map((x) => {
          return classNameList.map((y) => {
            if (y.map) return y.map((z) => z + "-" + x);
            else console.log(y);
          });
        })
        .flat(2);

      MAIN_COLLECT = MAIN_COLLECT.concat(out);
    } else {
      console.log("SHOULD BE parseLevelWithKeys");
    }
  }

  function parseLinkedLevel(levelKey) {
    // object of arrays
    if (utils.isObjectOfTypes(moduleLevels) === "arrays") {
      let level = moduleLevels[levelKey];

      if (moduleKeys.includes(levelKey) || levelKey.charAt(0) === "_") {
        let laliste = level.map((x) => moduleTag + "-" + levelKey + "-" + x);

        MAIN_COLLECT = MAIN_COLLECT.concat(laliste);
        parseDeclinatedLevel(levelKey, laliste);
      }
    } else {
      console.log("SHOULD BE parseLinkedLevel");
    }
  }

  function parseDeclinatedLevel(levelKey, laliste) {
    if (moduleLevels[levelKey] && moduleLevelsDeclined[levelKey]) {
      const out = laliste
        .map((x) => {
          return moduleLevelsDeclined[levelKey].map((y) => {
            return y === "_" ? x : [x, y].join("-");
          });
        })
        .flat(2);

      MAIN_COLLECT = MAIN_COLLECT.concat(out);
    }
  }

  function parseLevels(actionType = null) {
    // parse levels
    console.log(" moduleLevels " + qualify(moduleLevels));
    let out = [];

    switch (qualify(moduleKeys)) {
      case "arrayOfstrings":
      case "arrayOfnumbers":
        if (
          ["numbers", "strings"].includes(utils.isArrayOfTypes(moduleLevels))
        ) {
          let te = moduleKeys.map((x) => {
            return moduleLevels.map((y) => {
              return x + "-" + y;
            });
          });

          out = out.concat(te);
        }

        if (qualify(moduleLevels) === "objectOfarrays") {
        }

        break;
      case "arrayOfobjects":
        break;
      case "arrayOfarrays":
        break;
    }

    console.log("parseLevels", out);
  }

  function parseLevelsWithoutKeys() {}

  function parseClassNames() {
    if (Object.keys(moduleClassNames).length) {
      if (utils.isObjectOfTypes(moduleClassNames) === "arrays") {
        let test = Object.keys(moduleClassNames)
          .map((classNameKey: string) => {
            let classNameValues = moduleClassNames[classNameKey];
            //
            return classNameValues.map((x) => classNameKey + "-" + x);
          })
          .flat(2);

        MAIN_COLLECT = MAIN_COLLECT.concat(test);
      }
    }
  }

  function fromTag(fabricTag: string) {
    let out;
    const collectOut = {};

    parseKeys();
    parseLevelsWithoutKeys();
    parseClassNames();

    return (
      <div>
        {MAIN_COLLECT.flat().map((x) => (
          <div>{x}</div>
        ))}
      </div>
    );

    // if moduleClassNames
    if (Object.keys(moduleClassNames).length) {
      if (utils.isObjectOfTypes(moduleClassNames) === "arrays") {
        // console.log(utils.isObjectOfTypes(moduleClassNames))
        Object.keys(moduleClassNames).forEach((classNameKey: string) => {
          let classNameValues = moduleClassNames[classNameKey];
          //
          let test = classNameValues.map((x) => classNameKey + "-" + x);
          collectOut[classNameKey] = test;
          // console.log({classNameKey, classNameValues, test})
        });
      }

      out = (
        <div>
          {Object.values(collectOut).map((x: any) => {
            return (
              <div>
                <div>
                  <br />
                </div>
                {x.map((done) => (
                  <div>{done}</div>
                ))}{" "}
              </div>
            );
          })}
        </div>
      );
    }

    // console.log(collectOut);

    return out;
  }

  function qualify(vars) {
    if (Array.isArray(vars)) {
      return "arrayOf" + utils.isArrayOfTypes(vars);
    }

    if (typeof vars === "object") {
      return "objectOf" + utils.isObjectOfTypes(vars);
    }
  }

  return <div>{fromModule(module, moduleTag)}</div>;
}
