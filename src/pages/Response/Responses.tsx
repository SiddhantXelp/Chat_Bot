import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";

import NodeModal from "../../components/AddFamilyModal";
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
    const curNode: any = queue.pop();

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
    title: "Root",
    attributes: {
      id: Math.random(),
    },
    children: [
      {
        title: "Root 1.1",
        attributes: {
          id: Math.random(),
        },
        children: [],
      },
    ],
  });
  console.log("tree", tree)
  const [node, setNode] = useState<TreeNodeDatum | undefined>();

  const close = () => setNode(undefined);

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
  };

  const handleSubmit = (title: string, tags:string) => {
    var newId = Math.random()
    console.log("parent",node?.attributes?.id)
    var parentId = node?.attributes?.id
    const newTree = bfs(node?.attributes?.id, tree, {
      title: title,
      attributes: {
        id: newId
      },
      tags: tags,
      // children: [],
    });
    var newTreeNode = {
      title: title,
      attributes: {
        id: newId
      },
      tags: tags,
      parentId : parentId
    }
    console.log("neetreeId",newTreeNode)
    fetch("http://localhost:4011/request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTreeNode),
    })
      .then(async (res) => {
        let result = await res.json();
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
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
          {nodeDatum.title}
        </text>
      </g>
    );
  };

  return (
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
          onSubmit={(title,tags) => handleSubmit(title,tags)}
          onClose={close}
          isOpen={Boolean(node)}
        />
      </Box>
    </Stack>
  );
}
