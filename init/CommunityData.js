
const connection = require('../config/mongoose');

const CommunityData = [
  {
    question: 'What is the current data about how much amount of energy is fulfilled by renewable sources of energy?',
    answer: 'The current data shows that renewable sources of energy, such as solar and wind power, have increased significantly in recent years. In 2020, renewable energy sources accounted for 26% of global electricity generation, up from 21% in 2010.'
  },
  {
    question: 'What are the major sources of renewable energy?',
    answer: 'The major sources of renewable energy include solar power, wind energy, hydroelectric power, geothermal energy, and biomass energy.'
  },
  {
    question: 'How does solar energy work?',
    answer: 'Solar energy works by converting sunlight into electricity using photovoltaic (PV) cells or by using solar thermal systems to generate heat.'
  },
  {
    question: 'What are the environmental benefits of renewable energy?',
    answer: 'Renewable energy reduces greenhouse gas emissions, decreases air pollution, conserves natural resources, and helps mitigate climate change.'
  },
  {
    question: 'Which country generates the most wind energy?',
    answer: 'As of recent data, China leads in wind energy generation, followed by the United States and Germany.'
  },
  {
    question: 'How efficient is wind power?',
    answer: 'Modern wind turbines can convert 35-45% of the wind’s kinetic energy into electricity, making it a highly efficient renewable energy source.'
  },
  {
    question: 'Can renewable energy fully replace fossil fuels?',
    answer: 'While renewable energy has great potential, full replacement of fossil fuels requires improvements in energy storage, infrastructure, and global cooperation.'
  },
  {
    question: 'What are the economic benefits of renewable energy?',
    answer: 'Renewable energy creates jobs, reduces energy costs, and decreases dependence on imported fuels, contributing to economic growth.'
  },
  {
    question: 'How does hydroelectric power work?',
    answer: 'Hydroelectric power generates electricity by using the flow of water to spin turbines connected to generators.'
  },
  {
    question: 'What challenges does renewable energy face?',
    answer: 'Challenges include energy storage, intermittent power generation, high initial investment, and infrastructure adaptation.'
  },
  {
    question: 'How does geothermal energy work?',
    answer: 'Geothermal energy harnesses heat from the Earth’s interior to generate electricity and provide direct heating.'
  },
  {
    question: 'What is biomass energy?',
    answer: 'Biomass energy is derived from organic materials such as wood, crops, and animal waste, which are burned or converted into biofuels.'
  },
  {
    question: 'How much of the world’s energy is renewable?',
    answer: 'As of 2022, approximately 29% of global electricity generation comes from renewable sources, with ongoing growth.'
  },
  {
    question: 'What are some examples of renewable energy projects?',
    answer: 'Examples include large-scale solar farms, offshore wind farms, hydroelectric dams, and geothermal power plants.'
  },
  {
    question: 'Is nuclear power considered renewable?',
    answer: 'Nuclear power is not considered renewable because it relies on finite uranium resources, although it is a low-carbon energy source.'
  },
  {
    question: 'How does energy storage help renewable energy?',
    answer: 'Energy storage solutions like batteries and pumped hydro help store excess renewable energy for use when demand is high.'
  },
  {
    question: 'What is net metering?',
    answer: 'Net metering allows homeowners with solar panels to send excess electricity back to the grid in exchange for credits on their utility bills.'
  },
  {
    question: 'Can renewable energy be used for transportation?',
    answer: 'Yes, biofuels, electric vehicles, and hydrogen fuel cells are ways renewable energy is used for transportation.'
  },
  {
    question: 'What is the future of renewable energy?',
    answer: 'The future of renewable energy includes advancements in storage technology, increased efficiency, and greater global adoption to combat climate change.'
  }
];

module.exports = CommunityData;
