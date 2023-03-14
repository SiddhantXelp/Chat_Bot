import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";

import NodeModal from "../../components/AddFamilyModal";
import EditNodeModel from "../../components/EditFamilyModel"
import Tree from "react-d3-tree";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {postResponse} from "./responseSlice"
import {putResponse} from "./responseEditSlice"
import ResponsePreview from "../../components/ResponsePreview/responsePreview"

import { v4 as uuidv4 } from 'uuid';



export default function App() {
 
  const dispatch = useDispatch();
  const getData = async() => {
    const response = await fetch('http://localhost:4011/userRequest/3899ed86-1d3f-4694-a49c-90f99b829013')
    const data =  await response.json()
    // setGetNewTree(data.data)
   setTree(data.data)

  }
 
  const [parentUUID, setParentUUID] = useState("")
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>(
      {
       title: "Root1",
     
      children: [
        {
          title:'Root2',
          children:[]
        },
        {
          title:'Root3',
          children:[]
        },
        
      ],
    }
    );
    useEffect(() => {
      getData()
      //  getNodeDetails(tree)
    }, []);
  console.log("Tree=========>",tree)

  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const close = () => setNode(undefined);

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
  };
  const bfs = (id: string,
    tree: RawNodeDatum | RawNodeDatum[],
    node: RawNodeDatum
    )=> 
       {
      const queue: RawNodeDatum[] = [];
    
      queue.unshift(tree as RawNodeDatum);
      while (queue.length > 0) {
        const curNode: any = queue.pop();
        console.log(curNode._id,"curNode._id" )
        if (curNode.uuid === id) {
          console.log("curNodeID", curNode._id)
          var nodeId = curNode._id
          curNode.children.push(node);
          return [{...tree}, curNode]
        }
        const len = curNode.children.length;
        console.log("len",len)
    
        for (let i = 0; i < len; i++) {
          queue.unshift(curNode.children[i]);
        }
       
      }
    }

  const handleSubmit =  (title: string,description:string, selectType:string, tags:string ) => {
    var newUuid = uuidv4()

    const [newTree, curNode] : any = bfs(node?.uuid, tree, {
      title: title,
      uuid:newUuid,
      description: description,
      type: selectType,
      tags: tags,
      children: [],
    });
    console.log("bfs-------->",newTree, curNode.uuid)
    var newData = {
      title: title,
      uuid:curNode.uuid,
      description: description,
      type: selectType,
      // tags: tags,
      children: [],
    }
    //  dispatch(postResponse(newData));
    console.log("newtreeId",newData)
    // setTree(tree)
    if (newTree) {
      setTree(newTree);
    }

    setNode(undefined);
    console.count("handleSubmit fired")
  };
 const handleEdit = async(title: string,description:string, selectType:string, tags:string ) =>{
  const [newTree, curNode] : any = bfs(node?.uuid, tree, {});
  console.log("curnode form edit", newTree, curNode)
 var currentId = curNode.uuid

  const updatedData = {
   title: title,
   description : description,
   type: selectType,
   tags: tags
  }
// dispatch(putResponse(updatedData,currentId));

 }
 const getCurrentNodeData = ()=>{
  const [newTree, curNode] : any = bfs(node?.uuid, tree, {});
  console.log("from getCurrentNodeData", curNode)
 }
  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum,getCurrentNodeData:any) => void,
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
    onClick={() => click(nodeDatum,getCurrentNodeData)}
  />
<foreignObject x="-10" y="-17" width="125" height="45"  onClick={() => click(nodeDatum,getCurrentNodeData)}>
<span xmlns="http://www.w3.org/1999/xhtml" style={{color:'black',fontWeight: 600,fontSize:"13px", wordWrap:'break-word'}}>{nodeDatum.title}</span>
</foreignObject>
</g>
    );
  };

  return (
    <div className="mt-[60px] ml-[214px]">
      <ResponsePreview/>
    <Stack direction="row" spacing="md">
      <Box w="100vw" h="100vh" style={{backgroundColor:"#20344a"}}>
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
          onSubmit={(title,description,selectType,tags) => handleSubmit(title,description,selectType,tags)}
          onSubmitEdit={(title,description,selectType,tags) => handleEdit(title,description,selectType,tags)}
          onClose={close}
          isOpen={Boolean(node)}
        />
      </Box>
    </Stack>
    </div>
  );
}