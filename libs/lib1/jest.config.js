module.exports = {
  name: 'lib1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
