import axios from 'axios';

const url = 'https://webdocsgroup.herokuapp.com/api/facts/';


class FactService {
   // Get Facts
    static getFacts() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          resolve(
            data.map(fact =>({
              ...fact
            }))
          );
        }catch(err) {
          reject(err);
        }
      });
    }

   // Create Facts
    static insertFact(name, child, text, title) {
      console.log(name);
      return axios.post(`${url}/${name}/${child}/${text}/${title}`);
    }

   // Delete Facts

    static deleteFact(id) {
      return axios.delete(`${url}${id}`)
    }


}

export default FactService;