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
    vimeoUrl
    introText
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
    speakersCollection{
      items{
        name
        surname
        job
        image{
          url
          title
        }
      }
    }
    ctaTickets{
      initialText
      buttonText
      ticketsPage{
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
    ctaTickets{
      initialText
      buttonText
      ticketsPage{
        slug
      }
    }`,
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
    faqsCollection(limit: 6){
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
  "TICKETS_PAGE_FIELDS": `
    pageName
    title
    introText
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
        image{
          title
          url
        }
        description{
          json
        }
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
    }`,
  "PARTNER_PAGE_FIELDS": `
    pageName
    title
    introText
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
    techPartnersCollection(limit: 20){
      items{
        name
        logo{
          url
          title
        }
        url
      }
    }`,
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