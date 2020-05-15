module.exports = {
  name: 'algo-dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/algo-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
