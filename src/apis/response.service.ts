import axios from "axios";
import apis from './index'

export const createResponse = async (newData) => {
    console.log( newData, "iam  data from api call")

    let config = {
      method: 'POST',
      url: apis.response.upload,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data:newData,
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