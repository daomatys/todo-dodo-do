const firstDate = new Date(1995, 9, 19);
const lastDate = new Date(1995, 12, 18);

const correctDate = (date:Date) => date.getTime() / 1000;

const DEFAULTS = {
  tasks: [
    {
      id: correctDate(firstDate),
      note: 'Go crash the first case, c\'mon!',
    },
    {
      id: correctDate(lastDate),
      note: 'Then finish the last one.',
    },
  ],
  count: 2,
  completed: 0,
};

export default DEFAULTS;
