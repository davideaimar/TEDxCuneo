module.exports = {
  "SEO_FRAGMENT": `
    fragment SeoFields on Seo{
      hide
      title
      description
      image{
        title
        url
      }
    }`,
  "SPEAKER_FRAGMENT": `
    fragment SpeakerFields on Speaker{
      name
      surname
      job
      youtubeId
      image{
        title
        url
      }
      description{
        json
      }
    }`,
  "LANDING_PAGE_FIELDS": `
    introText
    introSecondaryText
    newsletterForm{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    landingFaqsCollection{
      items{
        text{
          json
        }
      }
    }
    ctaPartnership{
      text{
        json
      }
    }`,
  "HOME_PAGE_FIELDS": `
    subtitle
    introText
    initialText
    initialDescription{
      text{
        json
        links{
          entries{
            hyperlink{
              ...on Page{
                sys{
                  id
                }
                slug
              }
            }
          }
        }
      }
    }
    textBlocksCollection(limit: 5){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    newsletterForm{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    speakersTitle
    speakersPage{
      slug
    }
    speakersCollection(limit: 20){
      items{
        slug
        content{
          ...on SpeakerPage {
            speaker{
              name
              surname
              talkTitle
              image{
                url
                title
              }
            }
          }
        }
      }
    }
    ctaTickets{
      show
      initialText
      buttonText
      ticketsPage{
        slug
      }
    }
    ctaLive{
      show
      initialText
      buttonText
      livePage{
        slug
      }
    }
    tedBlock{
      image{
        url
        title
      }
      text{
        json
        links{
          entries{
            hyperlink{
              ...on Page{
                sys{
                  id
                }
                slug
              }
            }
          }
        }
      }
    }`,
  "TED_PAGE_FIELDS": `
    pageName
    title
    textBlocksCollection(limit: 4){
      items{
        image{
          url
          title
        }
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    ctaTickets{
      show
      initialText
      buttonText
      ticketsPage{
        slug
      }
    }`,
  "EVENT_PAGE_FIELDS": `
    pageName
    title
    vimeoUrl
    date

    textBlocksCollection(limit: 10){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    speakersTitle
    talksCollection(limit: 20){
      items{
        slug
        content{
          ...on SpeakerPage{
            speaker{
              name
              surname
              talkTitle
              image{
                url
                title
              }
              youtubeId
            }
          }
        }
      }
    }
    partnersCollection(limit: 10){
      items{
        name
        big
        partnersCollection(limit: 30){
          items{
            name
            logo{
              url
              title
              height
              width
            }
            url
          }
        }
      }
    }`,
  "EVENTS_PAGE_FIELDS": `
    pageName
    title
    introText
    eventsPagesCollection(limit: 10){
      items{
        slug
        content{
          ...on EventPage{
            pageName
            title
            date
            summaryImage{
              title
              url
            }
            summary
            previewButtonText
          }
        }
      }
    }
    finalTextCollection(limit: 10){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    `,
  "CONTACTS_PAGE_FIELDS": `
    title`,
  "PARTNERSHIP_PAGE_FIELDS": `
    introText
    ctaText
    form{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    bgImage{
      url
      title
    }
    imagesCollection(limit: 10){
      items{
        url
        title
      }
    }
    oldPartnersCollection(limit: 10){
      items{
        name
        big
        partnersCollection(limit: 30){
          items{
            name
            logo{
              url
              title
              height
              width
            }
            url
          }
        }
      }
    }
    initialTextBlocksCollection(limit: 3){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    bottomTextBlocksCollection(limit: 2){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }`,
  "JOINUS_PAGE_FIELDS": `
    introText
    introTitle
    ctaText
    urlGoogleForm
    openedPositionsCollection(limit: 30){
      items{
        name
        positionsCollection(limit: 10){
          items{
            title
            description
          }
        }
      }
  }`,
  "TICKETS_PAGE_FIELDS": `
    pageName
    title
    introText
    text{
      json
      links{
        entries{
          hyperlink{
            ...on Page{
              sys{
                id
              }
              slug
            }
          }
        }
      }
    }
    buttonText
    urlTickets
    newsletterForm{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    ctaEvent{
      text{
        json
        links{
          entries{
            hyperlink{
              ...on Page{
                sys{
                  id
                }
                slug
              }
            }
          }
        }
      }
    }`,
  "SPEAKERS_PAGE_FIELDS": `
    pageName
    title
    introText
    speakersTitle
    speakersCollection(limit: 30){
      items{
        name
        surname
        job
        youtubeId
        image{
          title
          url
        }
        description{
          json
        }
      }
    }`,
  "SPEAKER_PAGE_FIELDS": `
    edition{
      slug
    }
    speaker{
      name
      surname
      talkTitle
      job
      youtubeId
      image{
        title
        url
      }
      description{
        json
      }
    }`,
  "TEAM_PAGE_FIELDS": `
    pageName
    title
    introText
    departmentsCollection(limit: 20){
      items{
        title
        membersCollection(limit: 20){
          items{
            name
            surname
            image{
              title
              url
            }
            role
            siteName
            url
          }
        }
      }
    }
    thanksTitle
    thanks{
      json
    }`,
  "PARTNER_PAGE_FIELDS": `
    pageName
    title
    introText
    patrociniTitle
    patrociniCollection(limit: 20){
      items{
        name
        logo{
          url
          title
          height
          width
        }
        url
      }
    }
    officialPartnersTitle
    officialPartnersCollection(limit: 20){
      items{
        name
        logo{
          url
          title
          height
          width
        }
        url
      }
    }
    techPartnersTitle
    techPartnersCollection(limit: 40){
      items{
        name
        logo{
          url
          title
        }
        url
      }
    }
    mediaPartnersTitle
    mediaPartnersCollection(limit: 20){
      items{
        name
        logo{
          url
          title
        }
        url
      }
    }
    supportersTitle
    supportersCollection(limit: 20){
      items{
        name
        logo{
          url
          title
        }
        url
      }
    }`,
  "LIVE_PAGE_FIELDS": `
    telegramTitle
    videoTitle
    chatUrl
  `,
  "PRIVACY_POLICY_FIELDS": `
    title
    text{
      json
    }`,
  "NEWSLETTER_SUCCESS_PAGE": `
    buttonText
    content{
      json
    }`
}