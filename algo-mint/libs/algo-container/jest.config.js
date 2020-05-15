module.exports = {
  name: 'algo-container',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/algo-container',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
