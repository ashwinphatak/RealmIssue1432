const TaskSchema = {
  name: 'Task',
  primaryKey: 'id',
  properties: {
    title: { type: 'string' },
    id: { type: 'string', indexed: true },
    done: { type: 'bool', default: false },
    parent: { type: 'Task' },
    children: {
      type: 'linkingObjects',
      objectType: 'Task',
      property: 'parent'
    },
  },
}

const realm = new Realm({ schema: [TaskSchema]});

export default realm;

