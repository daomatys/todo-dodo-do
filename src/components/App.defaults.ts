const firstDate = new Date(1995, 9, 19);
const lastDate = new Date(1995, 12, 18);

const DEFAULTS = {
  tasks: [
    {
      id: firstDate.getTime() / 1000,
      note: 'Go and do the first case, c\'mon!',
    },
    {
      id: lastDate.getTime() / 1000,
      note: 'Then finish the last one.',
    },
  ],
  count: 2,
  completed: 0,
};

export default DEFAULTS;
