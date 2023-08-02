import { useTranslation } from 'react-i18next'

import {
  RiGithubLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiComputerLine,
  RiServerLine,
  RiImageLine
} from 'react-icons/ri'

import {
  /* front */
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  /* back */
  SiPostgresql,
  SiOracle,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si'

import work1 from '../assets/images/work_1.png'
import work2 from '../assets/images/work_2.png'
import work3 from '../assets/images/work_3.png'
import work1Modal from '../assets/images/work_1_modal.png'
import work2Modal from '../assets/images/work_2_modal.png'
import work3Modal from '../assets/images/work_3_modal.png'

export const servicesData = () => {
  const [t] = useTranslation('global')
  return [
    {
      id: '01',
      title: t('services.card-frontend.title'),
      description: t('services.card-frontend.description'),
      icon: <RiComputerLine />,
      learning: false,
      cardLeft: true
    },
    {
      id: '02',
      title: t('services.card-backend.title'),
      description: t('services.card-backend.description'),
      icon: <RiServerLine />,
      learning: false,
      cardLeft: false
    },
    {
      id: '03',
      title: t('services.card-design.title'),
      description: t('services.card-design.description'),
      icon: <RiImageLine />,
      learning: false,
      cardLeft: true
    }
  ]
}

export const technologiesFrontend = [
  <SiHtml5 key={'SiHtml5'} />,
  <SiCss3 key={'SiCss3'} />,
  <SiJavascript key={'SiJavascript'} />,
  <SiReact key={'SiReact'} />,
  <SiNextdotjs key={'SiNextdotjs'} />,
  <SiBootstrap key={'SiBootstrap'} />,
  <SiTailwindcss key={'SiTailwindcss'} />
]

export const technologiesBackend = [
  <SiPostgresql key={'SiPostgresql'} />,
  <SiOracle key={'SiOracle'} />,
  <SiNodedotjs key={'SiNodedotjs'} />,
  <SiExpress key={'SiExpress'} />
]

export const socialNetworks = [
  {
    id: '01',
    icon: <RiGithubLine />,
    url: '#github'
  },
  {
    id: '02',
    icon: <RiYoutubeLine />,
    url: '#youtube'
  },
  {
    id: '03',
    icon: <RiFacebookLine />,
    url: '#facebook'
  },
  {
    id: '04',
    icon: <RiWhatsappLine />,
    url: '#whatsapp'
  }
]

export const portfolioData = () => {
  const [t] = useTranslation('global')
  return [
    {
      id: '01',
      img: work1,
      imgShort: work1Modal,
      category: '',
      title: t('works.card-easy2Art.title'),
      description: t('works.card-easy2Art.description'),
      technologies: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
      githubUrl: 'https://github.com/javier2455/easy2art',
      websiteUrl: 'https://javier2455.github.io/easy2art/',
      development: false
    },
    {
      id: '02',
      img: work2,
      imgShort: work2Modal,
      category: '',
      title: t('works.card-portfolioX.title'),
      description: t('works.card-portfolioX.description'),
      technologies: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
      githubUrl: '',
      websiteUrl: '',
      development: true
    },
    {
      id: '03',
      img: work3,
      imgShort: work3Modal,
      category: '',
      title: t('works.card-dashboard.title'),
      description: t('works.card-dashboard.description'),
      technologies: [
        'NextJS',
        'Tailwind CSS',
        'NodeJS',
        'Express',
        'PostgresSql',
        'Figma'
      ],
      githubUrl: '',
      websiteUrl: '',
      development: true
    }
  ]
}
