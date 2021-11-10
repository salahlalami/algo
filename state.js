const state = {
  list: [
    {
      id: 1,
      company: "Win Adevnts Agency",
      managerSurname: "Zaki",
      managerName: "Soufi",
      email: "zaki@win-advents.com",
    },
  ],
  loading: false,
  pagination: {
    defaultCurrent: 1,
    pageSize: 1,
    total: 1,
  },
  current: null,
};

let newState = {
  ...state,
  list: [
    ...state.list,
    {
      id: 2,
      company: "IDURAR Web Agency",
      managerSurname: "Salah Eddine",
      managerName: "Lalami",
      email: "lalami@idurarweb.com",
    },
  ],
  loading: false,
  pagination: {
    defaultCurrent: 1,
    pageSize: 1,
    total: 2,
  },
};
console.log(state);
console.log(newState);
