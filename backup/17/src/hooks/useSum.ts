import {
  ref
} from "vue";
import axios from "axios";

export default function () {
  let sum = ref(0);

  function add() {
    sum.value += 1;
    //创建
  }

  return { sum, add };
}
