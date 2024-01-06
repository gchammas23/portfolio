const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gchammas23.github.io/portfolio',
  title: 'GC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel',
  role: 'Software Developer',
  description:
    'As a curious and detail-focused software developer, I thrive on collaborating with others to tackle challenges and deliver optimal outcomes. This portfolio showcases a selection of projects that reflect my evolving knowledge and skills. Thank you for taking the time to explore my work! 😊',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/gabriel-chammas/',
    github: 'https://github.com/gchammas23',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'React',
  'Python',
  'NodeJS',
  'Git',
  'Jest',
  'MongoDB',
  'NestJS',
  'Swift'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabrielchammas23@gmail.com',
}

export { header, about, projects, skills, contact }
