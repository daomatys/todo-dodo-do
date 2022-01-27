import defineIdByNum from 'src/lib/DefineIdByNum';

const DEFAULTS = {
  tasks: [
    {
      id: defineIdByNum(0),
      note: 'Go crash the first case, c\'mon!',
    },
    {
      id: defineIdByNum(1),
      note: 'Then finish the last one.',
    },
  ],
  count: 2,
  completed: 0,
};

export default DEFAULTS;
