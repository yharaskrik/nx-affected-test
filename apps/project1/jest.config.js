module.exports = {
  name: 'project1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/project1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
