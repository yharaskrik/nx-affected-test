module.exports = {
  name: 'lib4',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib4',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
