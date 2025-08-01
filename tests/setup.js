global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18').default;

Enzyme.configure({ adapter: new Adapter() });
