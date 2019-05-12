'use strict';

/** @type Egg.EggPlugin */
// 也可以写成
// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };
module.exports = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
