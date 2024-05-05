import { reactive, ref } from "vue";
import axios from "axios";

export default function () {
  let doglist = reactive([
    "https://images.dog.ceo/breeds/husky/n02110185_5716.jpg",
  ]);

  function addDog() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      //console.log(res.data.message)
      doglist.push(res.data.message);
    });
  }
  return { doglist, addDog };
}
