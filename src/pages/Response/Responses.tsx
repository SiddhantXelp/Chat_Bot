import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";

<<<<<<< HEAD
import NodeModal from "../../components/FamilyModal/AddFamilyModal";
=======
import NodeModal from "../../components/AddFamilyModal";
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50
import Tree from "react-d3-tree";
import { useState } from "react";

// import { v4 } from "uuid";

export function bfs(
  id: string,
  tree: RawNodeDatum | RawNodeDatum[],
  node: RawNodeDatum
) {
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree as RawNodeDatum);

  while (queue.length > 0) {
    const curNode = queue.pop();

    if (curNode.attributes?.id === id) {
      curNode.children.push(node);

      return { ...tree };
    }

    const len = curNode.children.length;

    for (let i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }
}

export default function App() {
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    name: "Root",
    attributes: {
      id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f",
    },
    children: [
      {
        name: "Root 1.1",
        attributes: {
          id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f2",
        },
        children: [],
      },
      {
        name: "Root 1.2",
        attributes: {
          id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f3",
        },
        children: [],
      },
    ],
  });
  const [node, setNode] = useState<TreeNodeDatum | undefined>();

  const close = () => setNode(undefined);

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
  };

  const handleSubmit = (familyMemberName: string) => {
    const newTree = bfs(node.attributes?.id, tree, {
      name: familyMemberName,
      attributes: {
        id: Math.random(),
      },
      children: [],
    });

    if (newTree) {
      setTree(newTree);
    }

    setNode(undefined);
  };

  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void
  ) => {
    const { nodeDatum } = customProps;

    return (
      <g>
        <rect
          x={"-50"}
          y={"-15"}
          width="80"
          height="30"
          rx="15"
          fill={"white"}
          onClick={() => click(nodeDatum)}
        />
        <text fill="#7451f8" strokeWidth="0.5" x="-40" y="1">
          {nodeDatum.name}
        </text>
      </g>
    );
  };

  return (
<<<<<<< HEAD
    <div className="mt-[60px] ml-[228px]">
  
=======
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50
    <Stack direction="row" spacing="md">
      <Box w="100vw" h="100vh">
        <Tree
          data={tree}
          zoomable={true}
          onNodeClick={handleNodeClick}
          translate={{
            x: 200,
            y: 200,
          }}
          renderCustomNodeElement={(nodeInfo) =>
            renderRectSvgNode(nodeInfo, handleNodeClick)
          }
        />
        <NodeModal
          onSubmit={(familyMemberName) => handleSubmit(familyMemberName)}
          onClose={close}
          isOpen={Boolean(node)}
        />
      </Box>
    </Stack>
<<<<<<< HEAD
    </div>
  );
}
=======
  );
}
>>>>>>> 16cdb631dccb871207f4597707a2253a64344a50
