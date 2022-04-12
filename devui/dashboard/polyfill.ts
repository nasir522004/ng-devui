/* eslint-disable */
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
export default (function (arr) {
  arr.forEach(function (item) {
    if (Object.prototype.hasOwnProperty.call(item,'append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        const argArr = Array.prototype.slice.call(arguments);
        const docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          const isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
