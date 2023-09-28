const model = {
    app: {
        pages: ['frontPage', 'addTaskPage'],
    },

    input: {

        addTaskPage: {
            id: null,
            date: 0,
            taskName: '',
            time: null,
            priority: '',
            expiredTask: null,
            checkbox: true,
        },
    },

    //data
    user: {
        currentMaxTasks: 5,
    },
    task: [
        {
            id: 5115,
            date: '26.09.2023',
            taskName: 'Vaske opp',
            time: '2 Timer',
            priority: 'Litt viktig',
            expiredTask: null,
            checkbox: true,
        },
    ]
};


/*
 - Per side: 
   1: Hvilke data vises her - og hvordan skal de ligge i 
      modellen for at vi skal kunne tegne opp siden?
   2: Hva kan brukeren gjøre på denne siden - og hvilke 
      endringer i modellen følger av det?
*/