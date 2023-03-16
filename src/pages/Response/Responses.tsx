import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";
import { useEffect, useState } from "react";

import NodeModal from "../../components/AddFamilyModal";
import ResponsePreview from "../../components/ResponsePreview/responsePreview";
import Tree from "react-d3-tree";
import { postResponse } from "./responseSlice";
import { putResponse } from "./responseEditSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const getData = async () => {
    const response = await fetch(
      "http://localhost:4011/userRequest/3899ed86-1d3f-4694-a49c-90f99b829013"
    );
    const data = await response.json();
    setTree(data.data);
  };

  const [currentNodeData, setCurrentNodeData] = useState({});
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    title: "Root1",

    children: [
      {
        title: "Root2",
        children: [],
      },
      {
        title: "Root3",
        children: [],
      },
    ],
  });
  useEffect(() => {
    getData();
  }, []);

  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const close = () => setNode(undefined);

  const bfs = (
    id: string,
    tree: RawNodeDatum | RawNodeDatum[],
    node: RawNodeDatum
  ) => {
    const queue: RawNodeDatum[] = [];

    queue.unshift(tree as RawNodeDatum);
    while (queue.length > 0) {
      const curNode: any = queue.pop();
      if (curNode.uuid === id) {
        var nodeId = curNode._id;
        curNode.children.push(node);
        return [{ ...tree }, curNode];
      }
      const len = curNode.children.length;

      for (let i = 0; i < len; i++) {
        queue.unshift(curNode.children[i]);
      }
    }
  };

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
    setModalVisible(!modalVisible);
    setCurrentNodeData(datum);
  };
  const handleSubmit = (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => {
    var newUuid = uuidv4();

    const [newTree, curNode]: any = bfs(node?.uuid, tree, {
      title: title,
      uuid: newUuid,
      description: description,
      type: selectType,
      tags: tags,
      children: [],
    });
    var newData = {
      title: title,
      uuid: curNode.uuid,
      description: description,
      type: selectType,
      children: [],
    };
     dispatch(postResponse(newData));
    if (newTree) {
      setTree(newTree);
    }

    setNode(undefined);
  };
  const handleEdit = async (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => {
    const [newTree, curNode]: any = bfs(node?.uuid, tree, {});
    var currentId = curNode.uuid;

    const updatedData = {
      title: title,
      description: description,
      type: selectType,
      tags: tags,
    };
    // dispatch(putResponse(updatedData,currentId));
  };

  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void
  ) => {
    const { nodeDatum } = customProps;

    return (
      <g>
        <rect
          x={"-20"}
          y={"-15"}
          width="125"
          height="45"
          rx="15"
          fill={"#ccd7e3"}
          onClick={() => click(nodeDatum)}
        />
        <foreignObject
          x="-10"
          y="-17"
          width="125"
          height="45"
          onClick={() => click(nodeDatum)}
        >
          <span
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "13px",
              wordWrap: "break-word",
            }}
          >
            {nodeDatum.title}
          </span>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="mt-[60px] ml-[214px]">
      <div className="relative">
        <ResponsePreview />
      </div>
      
      <Stack direction="row" spacing="md">
        <Box w="100vw" h="100vh" style={{ backgroundColor: "#20344a" }}>
          <Tree
            data={tree}
            zoomable={true}
            // onNodeClick={handleNodeClick}
            translate={{
              x: 200,
              y: 200,
            }}
            renderCustomNodeElement={(nodeInfo) =>
              renderRectSvgNode(nodeInfo, handleNodeClick)
            }
          />
          <NodeModal
            currData={currentNodeData}
            visible={modalVisible}
            onSubmit={(title, description, selectType, tags) =>
              handleSubmit(title, description, selectType, tags)
            }
            onSubmitEdit={(title, description, selectType, tags) =>
              handleEdit(title, description, selectType, tags)
            }
            onClose={close}
            isOpen={Boolean(node)}
          />
        </Box>
      </Stack>
    </div>
  );
}
