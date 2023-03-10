import axios from "axios";
import apis from './index'

export const editResponse = async (updatedData:any) => {
    console.log( updatedData, "iam  data from api call")

    let config = {
      method: 'PUT',
      url: apis.responseEdit.upload,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data:updatedData,
    };
    console.log("Config", config);
    try {
  
      console.log("before api")
      const res = await axios(config);
      console.log("Response+__>", res);
      return res.data.data;
    } catch (e) {
      console.log(e, "iam error")
      throw e;
    }
}