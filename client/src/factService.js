import axios from 'axios';

const url = 'http://localhost:5000/api/facts/';


class FactService {
   // Get Facts
    static getFacts() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          resolve(
            data.map(fact =>({
              ...fact,
              createdAt: new Date(fact.createdAt)
            }))
          );
        }catch(err) {
          reject(err);
        }
      });
    }

   // Create Facts
    static insertFact(text) {
      return axios.post(url, {
        text
      });
    }

   // Delete Facts

    static deleteFact(id) {
      return axios.delete(`${url}${id}`)
    }


}

export default FactService;