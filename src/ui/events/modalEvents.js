import { toggleModal } from "../components/Modal.js";
import { $restartBtn } from "../utils/DOMcache.js";

$restartBtn.addEventListener("click", () => {
  toggleModal();
});
