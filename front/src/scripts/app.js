import api from "./modules/api";
import loginator from "./modules/login";

window.addEventListener("load", () => {
  /**
   * Polyfill ie11
   */

  // forEach method
  const polyForeach = _ => {
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
  };
  polyForeach();

  // Remove method
  if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  loginator();
});
