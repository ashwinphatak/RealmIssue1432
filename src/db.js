import Realm from 'realm';

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

const realm = new Realm({ schema: [TaskSchema] });

if (realm.objects('Task').length === 0) {
  realm.write(() => {
    realm.create('Task', {
      id: 'pk',
      title: 'My Task',
    });
  });
}

export default realm;

