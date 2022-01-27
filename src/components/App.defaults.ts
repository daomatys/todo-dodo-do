const defineIdByNum = (num:number):string => `task-${num}`;

const DEFAULTS = {
  tasks: [
    {
      id: defineIdByNum(1),
      note: 'Go crash the first case, c\'mon!',
    },
    {
      id: defineIdByNum(2),
      note: 'Then finish the last one.',
    },
  ],
  count: 2,
  completed: 0,
};

export default DEFAULTS;
