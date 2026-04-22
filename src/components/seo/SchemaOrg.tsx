export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.ajngserralheria.com.br/#business",
        "name": "AJNG Serralheria Steel Frame",
        "description": "Fabricação e instalação de estruturas metálicas para telhados, telha sanduíche e mezaninos. Mais de 10 anos de experiência.",
        "url": "https://www.ajngserralheria.com.br",
        "telephone": "+55-11-94088-5781",
        "email": "contato@ajngserralheria.com.br",
        "foundingDate": "2014",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua dos Ralideos, 95",
          "addressLocality": "Jardim Shangrila",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-23.5",
          "longitude": "-46.6"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "13:00"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-11-94088-5781",
          "contactType": "customer service",
          "availableLanguage": "Portuguese",
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://wa.me/5511940885781",
          "https://www.instagram.com/ajngserralheria"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Serralheria",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Estrutura Metálica para Telhados",
                "description": "Fabricação e instalação de estruturas metálicas para telhados residenciais, comerciais e industriais."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Estrutura para Telha Sanduíche",
                "description": "Estrutura metálica reforçada para telhados com telha sanduíche, com isolamento térmico e acústico."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mezanino Metálico",
                "description": "Fabricação e instalação de mezaninos metálicos personalizados para comércios, depósitos e galpões."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quais regiões a AJNG Serralheria atende?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Atendemos Jardim Shangrila, região e cidades próximas de São Paulo. Entre em contato para confirmar disponibilidade na sua área."
            }
          },
          {
            "@type": "Question",
            "name": "Como solicitar um orçamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O orçamento é gratuito e sem compromisso. Entre em contato pelo WhatsApp (11) 94088-5781 e responderemos rapidamente."
            }
          },
          {
            "@type": "Question",
            "name": "A AJNG faz projetos sob medida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, todos os projetos são desenvolvidos sob medida, dimensionados especificamente para o espaço e necessidade de cada cliente."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a experiência da AJNG Serralheria?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A AJNG Serralheria possui mais de 10 anos de experiência na fabricação e instalação de estruturas metálicas, atendendo residências, comércios e galpões."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
