import { createContext } from 'react';

export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  translations: {
    pt: {
      nav: {
        about: 'Sobre',
        services: 'Serviços',
        studio: 'Studio'
      },
      hero: {
        title: 'Corpo leve, mente tranquila e amor puro.',
        button: 'Agendar uma sessão'
      },
      footer: {
        address: 'R. Saraiva de Carvalho 32B, 1250-244 Lisboa - Campo de Ourique',
        developedBy: 'Desenvolvido por Mariana'
      },
      welcome: {
        title: 'Welcome to STUDIO SPA',
        description: 'Our space is a haven of tranquility. Here, you will find facial, body, and hair treatments that promote health and beauty from the inside out.'
      }
    },
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        studio: 'Studio'
      },
      hero: {
        title: 'Light body, peaceful mind and pure love.',
        button: 'Schedule a session'
      },
      footer: {
        address: 'R. Saraiva de Carvalho 32B, 1250-244 Lisbon - Campo de Ourique',
        developedBy: 'Developed by Mariana'
      },
      welcome: {
        title: 'Welcome to STUDIO SPA',
        description: 'Our space is a haven of tranquility. Here, you will find facial, body, and hair treatments that promote health and beauty from the inside out.'
      }
    }
  }
});
