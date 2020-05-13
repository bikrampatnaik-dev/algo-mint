module.exports = {
  name: 'algo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/algo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
