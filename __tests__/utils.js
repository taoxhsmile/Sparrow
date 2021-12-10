export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function getAttributes(node, attributes) {
  return attributes.reduce((total, cur) => (total[cur] = node.getAttribute(cur), total), {});
}
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
