export const translations = {
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
      address: 'R. da Liberdade 11B, 1300-000 Lisboa - Campo da Liberdade',
      developedBy: 'Desenvolvido por Mariana'
    },
    welcome: {
      title: 'Bem-vindo ao STUDIO SPA',
      description: 'O nosso espaço é um refúgio de tranquilidade. Aqui, você encontra tratamentos faciais, corporais e capilares que promovem a saúde e a beleza de dentro para fora.'
    },
    about: {
      title: 'Sobre o STUDIO SPA',
      imageAlt: 'Interior do spa',
      paragraph1: 'O nosso espaço é um refúgio de tranquilidade, projetado para proporcionar uma experiência única de bem-estar e relaxamento.',
      paragraph2: 'Combinamos técnicas tradicionais com tecnologias modernas para oferecer os melhores tratamentos estéticos e terapêuticos.',
      paragraph3: 'Proporcionamos uma experiência única de Head Spa, um tratamento inspirado em técnicas milenares de massagem oriental que surgiu no Japão há cerca de 20 anos como uma terapia para reduzir tensão muscular e stress acumulado.'
    },
    services: {
      sectionTitle: 'O que oferecemos:',
      facial: {
        shortTitle: 'Tratamentos Faciais',
        imageAlt: 'Tratamento facial'
      },
      massage: {
        shortTitle: 'Massagens',
        imageAlt: 'Massagem relaxante'
      },
      headSpa: {
        shortTitle: 'Head Spa',
        imageAlt: 'Head Spa'
      }
    },
    studio: {
      title: 'O Nosso Studio',
      subtitle: 'Um espaço pensado para você',
      description: 'O nosso studio foi cuidadosamente planeado para proporcionar o máximo de conforto e tranquilidade durante a sua experiência.',
      hours: {
        title: 'Horário de Funcionamento:',
        weekdays: 'Segunda a Sábado: 7h às 21h',
        weekends: 'Alguns domingos e feriados também!'
      }
    },
    reviews: {
      title: 'Reviews',
      items: [
        {
          name: "Sydney J.",
          date: "Dez 2024",
          rating: 5,
          text: "I immensely enjoyed my experience here! The studio space was so calming, peaceful and inviting. My hair is SO soft still 4 days later and it was one of the best massages I've ever received."
        },
        {
          name: "Bianca N.",
          date: "Dez 2024",
          rating: 5,
          text: "Desde a recepção fui super bem atendida e cuidada. Fiz 90 minutos de massagem terapêutica e pedras quentes e amei!! Super recomendo!"
        },
        {
          name: "Carla M.",
          date: "Nov 2024",
          rating: 5,
          text: "Uma experiência verdadeiramente de sonho, em 90 minutos que passaram a voar. Não podia ter escolhido melhor forma de iniciar o meu dia de aniversário!"
        }
      ]
    },
    servicesPage: {
      title: 'Os Nossos Serviços',
      services: [
        {
          title: "Massagens",
          description: "Oferecemos diversos tipos de massagens especializadas:",
          types: [
            {
              name: "Massagem Relaxante",
              info: "Libera ocitocina, combate tensão muscular, auxilia fluxo intestinal e diminui estresse."
            },
            {
              name: "Massagem Terapêutica",
              info: "Indicada para dores musculares, contraturas e alívio de dores posturais."
            },
            {
              name: "Massagem Modeladora",
              info: "Movimentos intensos e profundos para reorganizar camadas de gordura e harmonizar contornos corporais."
            },
            {
              name: "Massagem Gestacional",
              info: "Recomendada após 12 semanas de gestação. Combina drenagem linfática com foco em lombar e ciático."
            }
          ],
          prices: [
            { duration: "40min", price: "39€" },
            { duration: "60min", price: "49€" },
            { duration: "80min", price: "59€" }
          ],
          image: "/images/massage.jpg",
          loading: "lazy",
          decoding: "async"
        },
        {
          title: "Limpeza de Pele Facial",
          description: "Um dos tratamentos estéticos mais realizados no mundo! A limpeza de pele tem como objetivo remover os cravos e as impurezas.",
          prices: [
            { duration: "60min", price: "65€" },
            { duration: "90min", price: "85€" }
          ],
          image: "/images/facial.jpg",
          loading: "lazy",
          decoding: "async"
        },
        {
          title: "Head Spa",
          description: "A técnica surgiu no Japão e é popular em outros países asiáticos. Consiste em massagens ao couro cabeludo que uniram o tratamento capilar e um ambiente relaxante.",
          prices: [
            { duration: "30min", price: "49€", subtitle: "Experiência Head Spa" },
            { duration: "60min", price: "69€", subtitle: "Experiência Head Spa + Facial" },
            { duration: "90min", price: "89€", subtitle: "Experiência Head Spa + Facial + Massagem" }
          ],
          image: "/images/hair.jpg",
          loading: "lazy",
          decoding: "async"
        }
      ]
    },
    buttons: {
      schedule: 'Agendar',
      visit: 'Agendar visita'
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
      address: 'R. da Liberdade 11B, 1300-000 Lisboa - Campo da Liberdade',
      developedBy: 'Developed by Mariana'
    },
    welcome: {
      title: 'Welcome to STUDIO SPA',
      description: 'Our space is a haven of tranquility. Here, you will find facial, body, and hair treatments that promote health and beauty from the inside out.'
    },
    about: {
      title: 'About STUDIO SPA',
      imageAlt: 'Spa interior',
      paragraph1: 'Our space is a haven of tranquility, designed to provide a unique experience of well-being and relaxation.',
      paragraph2: 'We combine traditional techniques with modern technologies to offer the best aesthetic and therapeutic treatments.',
      paragraph3: 'We provide a unique Head Spa experience, a treatment inspired by ancient oriental massage techniques that emerged in Japan about 20 years ago.'
    },
    studio: {
      title: 'Our Studio',
      subtitle: 'A space designed for you',
      description: 'Our structure was carefully planned to provide maximum comfort and tranquility during your experience.',
      hours: {
        title: 'Opening Hours:',
        weekdays: 'Monday to Saturday: 7am to 9pm',
        weekends: 'Some Sundays and holidays too!'
      }
    },
    services: {
      sectionTitle: 'What we offer:',
      facial: {
        shortTitle: 'Facial Treatments',
        imageAlt: 'Facial treatment'
      },
      massage: {
        shortTitle: 'Massages',
        imageAlt: 'Relaxing massage'
      },
      headSpa: {
        shortTitle: 'Head Spa',
        imageAlt: 'Head Spa'
      }
    },
    reviews: {
      title: 'Reviews',
      items: [
        {
          name: "Sydney J.",
          date: "Dec 2024",
          rating: 5,
          text: "I immensely enjoyed my experience here! The studio space was so calming, peaceful and inviting. My hair is SO soft still 4 days later and it was one of the best massages I've ever received."
        },
        {
          name: "Bianca N.",
          date: "Dec 2024",
          rating: 5,
          text: "From the reception, I was super well taken care of. I had 90 minutes of therapeutic massage and hot stones and loved it!! Highly recommend!"
        },
        {
          name: "Carla M.",
          date: "Nov 2024",
          rating: 5,
          text: "A truly dreamy experience in 90 minutes that flew by. I couldn't have chosen a better way to start my birthday!"
        }
      ]
    },
    servicesPage: {
      title: 'Our Services',
      services: [
        {
          title: "Massages",
          description: "We offer various specialized massage types:",
          types: [
            {
              name: "Relaxing Massage",
              info: "Releases oxytocin, fights muscle tension, helps intestinal flow and reduces stress."
            },
            {
              name: "Therapeutic Massage",
              info: "Indicated for muscle pain, contractures and postural pain relief."
            },
            {
              name: "Modeling Massage",
              info: "Intense and deep movements to reorganize fat layers and harmonize body contours."
            },
            {
              name: "Pregnancy Massage",
              info: "Recommended after 12 weeks of pregnancy. Combines lymphatic drainage focusing on lower back and sciatic pain."
            }
          ],
          prices: [
            { duration: "40min", price: "39€" },
            { duration: "60min", price: "49€" },
            { duration: "80min", price: "59€" }
          ],
          image: "/images/massage.jpg",
          loading: "lazy",
          decoding: "async"
        },
        {
          title: "Facial Cleansing",
          description: "One of the most performed aesthetic treatments in the world! Facial cleansing aims to remove blackheads and impurities.",
          prices: [
            { duration: "60min", price: "65€" },
            { duration: "90min", price: "85€" }
          ],
          image: "/images/facial.jpg",
          loading: "lazy",
          decoding: "async"
        },
        {
          title: "Head Spa",
          description: "The technique originated in Japan and is popular in other Asian countries. It consists of scalp massages that combine hair treatment with a relaxing environment.",
          prices: [
            { duration: "30min", price: "49€", subtitle: "Head Spa Experience" },
            { duration: "60min", price: "69€", subtitle: "Head Spa + Facial Experience" },
            { duration: "90min", price: "89€", subtitle: "Head Spa + Facial + Massage Experience" }
          ],
          image: "/images/hair.jpg",
          loading: "lazy",
          decoding: "async"
        }
      ]
    },
    buttons: {
      schedule: 'Schedule',
      visit: 'Schedule visit'
    }
  }
};
